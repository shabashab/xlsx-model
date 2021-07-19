import { WorkbookModel } from "@xlsx-model/models";
import WorksheetModelDeserializer from "./WorksheetModelDeserializer";

export default class WorkbookModelDeserializer {
  private _worksheetDeserializer: WorksheetModelDeserializer;

  constructor() {
    this._worksheetDeserializer = new WorksheetModelDeserializer();
  }

  deserialize(objectToDeserialize: any): WorkbookModel {
    let workbookModel = new WorkbookModel();

    objectToDeserialize["worksheets"].forEach((value: any) => {
      workbookModel.worksheets.push(
        this._worksheetDeserializer.deserialize(value),
      );
    });

    return workbookModel;
  }
}
