import { RowModel } from "@xlsx-model/models";
import ObjectDictionary from "../Types/ObjectDictionary";
import CellModelSerializer from "./CellModelSerializer";

export default class RowModelSerializer {
  private _cellSerializer: CellModelSerializer;

  constructor() {
    this._cellSerializer = new CellModelSerializer();
  }

  serialize(rowModel: RowModel): object {
    let result = {
      cells: {} as ObjectDictionary,
    };

    rowModel.cells.forEach((key, value) => {
      result.cells[key.toString()] = this._cellSerializer.serialize(value);
    });

    return result;
  }
}
