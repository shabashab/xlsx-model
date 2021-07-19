import { CellModel, NumberDictionary, RowModel } from "@xlsx-model/models";
import { Serializable, JsonProperty } from "typescript-json-serializer";

@Serializable()
export class SerializableRowModel implements RowModel {
  @JsonProperty()
  cells: NumberDictionary<CellModel>;

  constructor(rowModel: RowModel) {
    this.cells = rowModel.cells;
  }
}
