import { CellModel } from "@xlsx-model/models";
import CellStyleSerializer from "./CellStyleSerializer";

export default class CellModelSerializer {
  private _cellStyleSerializer: CellStyleSerializer;

  constructor() {
    this._cellStyleSerializer = new CellStyleSerializer();
  }

  serialize(cellModel: CellModel): object {
    let result = {
      rowSpan: cellModel.rowSpan,
      columnSpan: cellModel.columnSpan,
      value: cellModel.value,
      style: {} as object,
    };

    result.style = this._cellStyleSerializer.serialize(cellModel.style);

    return result;
  }
}
