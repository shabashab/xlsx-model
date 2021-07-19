import { WorkbookModel } from "@xlsx-model/models";
import { JsonProperty, Serializable } from "typescript-json-serializer";
import { SerializableWorksheetModel } from "./serializableWorksheetModel";

@Serializable()
export class SerializableWorkbookModel implements WorkbookModel {
  @JsonProperty()
  worksheets: SerializableWorksheetModel[];

  constructor(workbookModel: WorkbookModel) {
    this.worksheets = workbookModel.worksheets.map<SerializableWorksheetModel>(
      (value) => {
        return new SerializableWorksheetModel(value);
      },
    );
  }
}
