import { CellModel } from "@xlsx-model/models";
import { Serializable, JsonProperty } from "typescript-json-serializer";
import { SerializableCellStyle } from "./serializableCellStyle";

@Serializable()
export class SerializableCellModel implements CellModel {

  @JsonProperty()
  value: string;

  @JsonProperty()
  rowSpan: number;

  @JsonProperty()
  columnSpan: number;

  @JsonProperty()
  style: SerializableCellStyle;

  constructor(cellModel: CellModel) {
    this.value = cellModel.value;
    this.rowSpan = cellModel.rowSpan;
    this.columnSpan = cellModel.columnSpan;
    this.style = new SerializableCellStyle(cellModel.style);
  }
}