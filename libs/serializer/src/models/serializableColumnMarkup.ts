import { ColumnMarkup } from "@xlsx-model/models";
import { Serializable, JsonProperty } from "typescript-json-serializer";

@Serializable()
export class SerializableColumnMarkup implements ColumnMarkup {

  @JsonProperty()
  public width?: number;

  @JsonProperty()
  public level?: number;

  @JsonProperty()
  public collapsed?: boolean;

  constructor(columnMarkup: ColumnMarkup) {
    this.width = columnMarkup.width;
    this.level = columnMarkup.level;
    this.collapsed = columnMarkup.collapsed;
  }
}
