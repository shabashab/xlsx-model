import CellModel from "./CellModel";
import { Dictionary } from "typescript-collections";

export default class RowModel {
  public cells: Dictionary<number, CellModel>;

  constructor(cells?: Dictionary<number, CellModel>) {
    this.cells = cells || new Dictionary<number, CellModel>();
  }
}
