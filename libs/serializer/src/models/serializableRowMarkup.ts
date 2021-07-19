import { RowMarkup } from "@xlsx-model/models";
import { Serializable, JsonProperty } from "typescript-json-serializer";

@Serializable()
export class SerializableRowMarkup implements RowMarkup {

  @JsonProperty()
  public height?: number;

  @JsonProperty()
  public level?: number;

  @JsonProperty()
  public collapsed?: boolean;

  constructor(rowMarkup: RowMarkup) {
    this.collapsed = rowMarkup.collapsed;
    this.height = rowMarkup.height;
    this.level = rowMarkup.level;
  }
}
