import {
  NumberDictionary,
  RowModel,
  TableMarkup,
  WorksheetModel,
} from "@xlsx-model/models";
import { Serializable, JsonProperty } from "typescript-json-serializer";
import { SerializableTableMarkup } from "./serializableTableMarkup";

@Serializable()
export class SerializableWorksheetModel implements WorksheetModel {
  @JsonProperty()
  rows: NumberDictionary<RowModel>;

  @JsonProperty()
  tableMarkup: SerializableTableMarkup;

  @JsonProperty()
  name: string;

  constructor(worksheetModel: WorksheetModel) {
    this.rows = worksheetModel.rows;
    this.tableMarkup = new SerializableTableMarkup(worksheetModel.tableMarkup);
    this.name = worksheetModel.name;
  }
}
