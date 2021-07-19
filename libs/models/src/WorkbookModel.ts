import WorksheetModel from "./WorksheetModel";

export default class WorkbookModel {
  public worksheets: WorksheetModel[];

  constructor(worksheets?: WorksheetModel[]) {
    this.worksheets = worksheets || [];
  }
}
