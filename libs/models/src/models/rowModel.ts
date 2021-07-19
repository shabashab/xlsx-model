import { CellModel } from "./cellModel";
import { NumberDictionary } from "../helpers/numberDictionary";

export interface RowModel {
  cells: NumberDictionary<CellModel>;
}
