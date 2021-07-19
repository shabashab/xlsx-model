import { RowMarkup } from "./rowMarkup";
import { ColumnMarkup } from "./columnMarkup";
import { NumberDictionary } from "../../helpers/numberDictionary";

export interface TableMarkup {
  rows: NumberDictionary<RowMarkup>;
  columns: NumberDictionary<ColumnMarkup>;
  rowsCount: number;
  columnsCount: number;
}
