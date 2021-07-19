import {
  TableMarkup,
  NumberDictionary,
  ColumnMarkup,
  RowMarkup,
} from "@xlsx-model/models";
import { Serializable, JsonProperty } from "typescript-json-serializer";

@Serializable()
export class SerializableTableMarkup implements TableMarkup {
  @JsonProperty()
  rows: NumberDictionary<RowMarkup>;

  @JsonProperty()
  columns: NumberDictionary<ColumnMarkup>;

  @JsonProperty()
  rowsCount: number;

  @JsonProperty()
  columnsCount: number;

  constructor(tableMarkup: TableMarkup) {
    this.rows = tableMarkup.rows;
    this.columns = tableMarkup.columns;
    this.rowsCount = tableMarkup.rowsCount;
    this.columnsCount = tableMarkup.columnsCount;
  }
}
