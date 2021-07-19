import { RowMarkup } from "./RowMarkup";
import { ColumnMarkup } from "./ColumnMarkup";

import { Dictionary } from "typescript-collections";

export interface TableMarkup {
  rows: Dictionary<number, RowMarkup>;
  columns: Dictionary<number, ColumnMarkup>;
  rowsCount: number;
  columnsCount: number;
}
