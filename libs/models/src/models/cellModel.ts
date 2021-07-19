import { CellStyle } from "./cellStyle";

export interface CellModel {
  value: string;
  rowSpan: number;
  columnSpan: number;

  style: CellStyle;
}
