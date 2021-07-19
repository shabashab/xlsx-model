import IWorksheetMergesParser from "./Interfaces/IWorksheetMergesParser";
import { Worksheet } from "@xlsx-model/excel";
import { CellModel, RowModel, WorksheetModel } from "@xlsx-model/models";

type CellAddress = {
  rowId: number;
  columnId: number;
};

export default class WorksheetMergesParser implements IWorksheetMergesParser {
  private static parseColumnId(columnName: string): number {
    let nameLength = columnName.length - 1;
    let result = 0;

    do {
      result += columnName.charCodeAt(nameLength) - 65 + 26 * nameLength;
    } while (nameLength--);
    return result;
  }

  private static parseCellAddress(address: string): CellAddress {
    let regex = /([A-Z]+)(\d+)/;
    let matches = address.match(regex);

    if (!matches || matches.length != 3) throw "Invalid range";

    let columnMatch = matches[1];
    let rowMatch = matches[2];

    let columnId = WorksheetMergesParser.parseColumnId(columnMatch);
    let rowId = parseInt(rowMatch) - 1;

    return { columnId, rowId };
  }

  private static parseRange(range: string): [CellAddress, CellAddress] {
    let regex = /([A-Z]+)(\d+):([A-Z]+)(\d+)/;
    let matches = range.match(regex);
    if (!matches || matches.length != 5) throw "Invalid range";

    let startRange = WorksheetMergesParser.parseCellAddress(
      matches[1] + matches[2],
    );
    let endRange = WorksheetMergesParser.parseCellAddress(
      matches[3] + matches[4],
    );

    return [startRange, endRange];
  }

  parse(
    worksheet: Worksheet,
    inputModel: WorksheetModel,
  ): WorksheetModel | undefined {
    let worksheetModel = worksheet.model as any;

    if (!worksheetModel.hasOwnProperty("merges")) return undefined;
    let merges: Array<string> = worksheetModel["merges"];

    merges.forEach((merge) => {
      let [mergeStart, mergeEnd] = WorksheetMergesParser.parseRange(merge);

      let inputRows = inputModel.rows;

      if (!inputRows.containsKey(mergeStart.rowId)) {
        inputModel.rows.setValue(mergeStart.rowId, new RowModel());
      }

      if (
        !inputRows
          .getValue(mergeStart.rowId)
          ?.cells.containsKey(mergeStart.columnId)
      ) {
        inputModel.rows
          .getValue(mergeStart.rowId)
          ?.cells.setValue(mergeStart.columnId, new CellModel());
      }

      let startCell = inputRows
        .getValue(mergeStart.rowId)
        ?.cells.getValue(mergeStart.columnId);

      if (!startCell) return;

      startCell.rowSpan = Math.abs(mergeEnd.rowId - mergeStart.rowId + 1);
      startCell.columnSpan = Math.abs(
        mergeEnd.columnId - mergeStart.columnId + 1,
      );
    });

    return inputModel;
  }
}
