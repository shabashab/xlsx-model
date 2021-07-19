import { Cell } from "@xlsx-model/excel";
import { CellModel } from "@xlsx-model/models";

export default interface ICellParser {
  parse(cell?: Cell): CellModel;
}
