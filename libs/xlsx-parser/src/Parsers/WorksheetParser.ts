import IWorksheetParser from "./Interfaces/IWorksheetParser";
import { Worksheet } from "@xlsx-model/excel";
import { RowModel, WorksheetModel } from "@xlsx-model/models";
import IRowParser from "./Interfaces/IRowParser";
import IWorksheetMarkupParser from "./Interfaces/IWorksheetMarkupParser";
import { Dictionary } from "typescript-collections";
import IWorksheetMergesParser from "./Interfaces/IWorksheetMergesParser";

export default class WorksheetParser implements IWorksheetParser {
  private _rowParser: IRowParser;
  private _markupParser: IWorksheetMarkupParser;
  private _mergesParser: IWorksheetMergesParser;

  constructor(
    rowParser: IRowParser,
    markupParser: IWorksheetMarkupParser,
    mergesParser: IWorksheetMergesParser,
  ) {
    this._rowParser = rowParser;
    this._markupParser = markupParser;
    this._mergesParser = mergesParser;
  }

  private parseRows(worksheet: Worksheet): Dictionary<number, RowModel> {
    let rows = new Dictionary<number, RowModel>();

    worksheet.eachRow((row) => {
      let rowId = row.number - 1;
      let rowModel = this._rowParser.parse(row);
      rows.setValue(rowId, rowModel);
    });

    return rows;
  }

  parse(worksheet: Worksheet): WorksheetModel {
    let rows = this.parseRows(worksheet);
    let markup = this._markupParser.parse(worksheet);
    let name = worksheet.name;

    let worksheetModel = new WorksheetModel(markup, rows, name);

    worksheetModel =
      this._mergesParser.parse(worksheet, worksheetModel) || worksheetModel;

    return worksheetModel;
  }
}
