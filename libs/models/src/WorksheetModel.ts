import RowModel from "./RowModel";
import TableMarkup from "./Markup/TableMarkup";

import { Dictionary } from "typescript-collections";

export default class WorksheetModel {
  public rows: Dictionary<number, RowModel>;
  public tableMarkup: TableMarkup;
  public name: string;

  constructor(
    tableMarkup?: TableMarkup,
    rows?: Dictionary<number, RowModel>,
    name?: string,
  ) {
    this.rows = rows || new Dictionary<number, RowModel>();
    this.tableMarkup = tableMarkup || new TableMarkup();
    this.name = name || "";
  }
}
