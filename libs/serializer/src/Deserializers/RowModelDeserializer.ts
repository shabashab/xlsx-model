import { RowModel } from "@xlsx-model/models";
import CellModelDeserializer from "./CellModelDeserializer";

export default class RowModelDeserializer {
  private _cellDeserializer: CellModelDeserializer;

  constructor() {
    this._cellDeserializer = new CellModelDeserializer();
  }

  deserialize(objectToDeserialize: any): RowModel {
    let rowModel = new RowModel();

    Object.entries(objectToDeserialize.cells).forEach(([key, value]) => {
      rowModel.cells.setValue(
        parseInt(key),
        this._cellDeserializer.deserialize(value),
      );
    });

    return rowModel;
  }
}
