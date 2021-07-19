import { CellModel } from "./cellModel";
import { Dictionary } from "typescript-collections";

export interface RowModel {
  cells: Dictionary<number, CellModel>;
}
