import { RowMarkup } from "./rowMarkup";
import { ColumnMarkup } from "./columnMarkup";

import { Dictionary } from "typescript-collections";

export interface TableMarkup {
  rows: Dictionary<number, RowMarkup>;
  columns: Dictionary<number, ColumnMarkup>;
  rowsCount: number;
  columnsCount: number;
}
