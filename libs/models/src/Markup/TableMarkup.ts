import RowMarkup from "./RowMarkup";
import ColumnMarkup from "./ColumnMarkup";

import { Dictionary } from "typescript-collections";

export default class TableMarkup {
  public rows: Dictionary<number, RowMarkup>;
  public columns: Dictionary<number, ColumnMarkup>;
  public rowsCount: number;
  public columnsCount: number;

  constructor(
    rows?: Dictionary<number, RowMarkup>,
    columns?: Dictionary<number, ColumnMarkup>,
    rowsCount?: number,
    columnsCount?: number,
  ) {
    this.rows = rows || new Dictionary<number, RowMarkup>();
    this.columns = columns || new Dictionary<number, ColumnMarkup>();

    this.rowsCount = rowsCount || 0;
    this.columnsCount = columnsCount || 0;
  }
}
