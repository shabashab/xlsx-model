import IWorkbookParser from "./Interfaces/IWorkbookParser";
import { Workbook } from "@xlsx-model/excel";
import { WorkbookModel } from "@xlsx-model/models";
import IWorksheetParser from "./Interfaces/IWorksheetParser";

export default class WorkbookParser implements IWorkbookParser {
  private _worksheetParser: IWorksheetParser;

  constructor(worksheetParser: IWorksheetParser) {
    this._worksheetParser = worksheetParser;
  }

  parse(workbook: Workbook): WorkbookModel {
    let workbookModel = new WorkbookModel();

    workbook.eachSheet((worksheet) => {
      let worksheetModel = this._worksheetParser.parse(worksheet);
      workbookModel.worksheets.push(worksheetModel);
    });

    return workbookModel;
  }
}
