import ICellParser from "./Interfaces/ICellParser";

import { Cell } from "@xlsx-model/excel";
import { CellModel } from "@xlsx-model/models";
import ICellStyleParser from "./Interfaces/ICellStyleParser";

export default class CellParser implements ICellParser {
  private _styleParser: ICellStyleParser;

  constructor(styleParser: ICellStyleParser) {
    this._styleParser = styleParser;
  }

  parse(cell?: Cell): CellModel {
    let cellModel = new CellModel();

    if (!cell) return cellModel;

    cellModel.value = cell.text;
    cellModel.rowSpan = 1;
    cellModel.columnSpan = 1;
    cellModel.style = this._styleParser.parse(cell);

    return cellModel;
  }
}
