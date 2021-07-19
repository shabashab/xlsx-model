import { RowModel } from "./rowModel";
import { TableMarkup } from "./markup/tableMarkup";
import { NumberDictionary } from "../helpers/numberDictionary";

export interface WorksheetModel {
  rows: NumberDictionary<RowModel>;
  tableMarkup: TableMarkup;
  name: string;
}
