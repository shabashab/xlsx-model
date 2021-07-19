import { Border, CellStyle } from "@xlsx-model/models";
import { Serializable, JsonProperty } from "typescript-json-serializer";

@Serializable()
export class SerializableCellStyle implements CellStyle {

  @JsonProperty()
  fillColor?: string | undefined;

  @JsonProperty()
  textColor?: string | undefined;

  @JsonProperty()
  fontSize?: number | undefined;

  @JsonProperty()
  border: Border;

  constructor(cellStyle: CellStyle) {
    this.fillColor = cellStyle.fillColor;
    this.textColor = cellStyle.textColor;
    this.fontSize = cellStyle.fontSize;
    this.border = cellStyle.border;
  }
}