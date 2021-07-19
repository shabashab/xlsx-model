import { CellStyle } from "./CellStyle";

export interface CellModel {
  value: string;
  rowSpan: number;
  columnSpan: number;

  style: CellStyle;
}
