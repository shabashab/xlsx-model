import IWorksheetMarkupParser from "./Interfaces/IWorksheetMarkupParser";
import { Worksheet } from "@xlsx-model/excel";
import { ColumnMarkup, RowMarkup, TableMarkup } from "@xlsx-model/models";
import { Dictionary } from "typescript-collections";

export default class WorksheetMarkupParser implements IWorksheetMarkupParser {
  private parseRowsMarkup(
    worksheet: Worksheet,
  ): [Dictionary<number, RowMarkup>, number] {
    let rowsMarkup = new Dictionary<number, RowMarkup>();
    let rowsCount = worksheet.dimensions.bottom;

    worksheet.eachRow((row) => {
      let rowId = row.number - 1;

      let height = row.height;
      let level = row.outlineLevel;
      let collapsed = row.collapsed;

      let rowMarkup = new RowMarkup(height, level, collapsed);
      rowsMarkup.setValue(rowId, rowMarkup);
    });

    return [rowsMarkup, rowsCount];
  }

  private parseColumnsMarkup(
    worksheet: Worksheet,
  ): [Dictionary<number, ColumnMarkup>, number] {
    let columnsMarkup = new Dictionary<number, ColumnMarkup>();
    let columnsCount = worksheet.dimensions.right;

    worksheet.columns.forEach((column) => {
      if (typeof column.number === "undefined") return;
      let columnId: number = column.number;

      let width = column.width;
      let level = column.outlineLevel;
      let collapsed = column.collapsed;

      let columnMarkup = new ColumnMarkup(width, level, collapsed);
      columnsMarkup.setValue(columnId, columnMarkup);
    });

    return [columnsMarkup, columnsCount];
  }

  parse(worksheet: Worksheet): TableMarkup {
    const [rowsMarkup, rowsCount] = this.parseRowsMarkup(worksheet);
    const [columnsMarkup, columnsCount] = this.parseColumnsMarkup(worksheet);

    return new TableMarkup(rowsMarkup, columnsMarkup, rowsCount, columnsCount);
  }
}
