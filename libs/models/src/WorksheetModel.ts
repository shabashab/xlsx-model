import { RowModel } from "./RowModel";
import { TableMarkup } from "./Markup/TableMarkup";
import { Dictionary } from "typescript-collections";

export interface WorksheetModel {
  rows: Dictionary<number, RowModel>;
  tableMarkup: TableMarkup;
  name: string;
}
