import { CellModel } from "./CellModel";
import { Dictionary } from "typescript-collections";

export interface RowModel {
  cells: Dictionary<number, CellModel>;
}
