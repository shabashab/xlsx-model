import { RowModel } from "./rowModel";
import { TableMarkup } from "./markup/tableMarkup";
import { Dictionary } from "typescript-collections";

export interface WorksheetModel {
  rows: Dictionary<number, RowModel>;
  tableMarkup: TableMarkup;
  name: string;
}
