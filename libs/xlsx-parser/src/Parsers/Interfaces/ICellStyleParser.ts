import { Cell } from "@xlsx-model/excel";
import { CellStyle } from "@xlsx-model/models";

export default interface ICellStyleParser {
  parse(cell: Cell): CellStyle;
}
