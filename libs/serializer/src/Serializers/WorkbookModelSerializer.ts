import { WorkbookModel } from "@xlsx-model/models";
import WorksheetModelSerializer from "./WorksheetModelSerializer";

export default class WorkbookModelSerializer {
  private _worksheetModelSerializer: WorksheetModelSerializer;

  constructor() {
    this._worksheetModelSerializer = new WorksheetModelSerializer();
  }

  serialize(workbookModel: WorkbookModel): object {
    let result = {
      worksheets: [] as object[],
    };

    workbookModel.worksheets.forEach((worksheet) => {
      result.worksheets.push(
        this._worksheetModelSerializer.serialize(worksheet),
      );
    });

    return result;
  }
}
