import IRowParser from "./Interfaces/IRowParser";
import { Row } from "@xlsx-model/excel";
import { RowModel } from "@xlsx-model/models";
import ICellParser from "./Interfaces/ICellParser";

export default class RowParser implements IRowParser {
  private _cellParser: ICellParser;

  constructor(cellParser: ICellParser) {
    this._cellParser = cellParser;
  }

  parse(row: Row): RowModel {
    let rowModel = new RowModel();

    const dimensions = row.worksheet.dimensions;

    for (let i = 0; i < dimensions.right; i++) {
      const cell = row.findCell(i + 1);
      if (!cell) {
        const cellModel = this._cellParser.parse();
        rowModel.cells.setValue(i, cellModel);
        continue;
      }

      if (cell.isMerged && cell.master !== cell) continue;

      const cellModel = this._cellParser.parse(cell);
      rowModel.cells.setValue(i, cellModel);
    }

    return rowModel;
  }
}
