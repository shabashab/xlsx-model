import { CellModel } from "@xlsx-model/models";
import CellStyleDeserializer from "./CellStyleDeserializer";

export default class CellModelDeserializer {
  private _styleDeserializer: CellStyleDeserializer;

  constructor() {
    this._styleDeserializer = new CellStyleDeserializer();
  }

  deserialize(objectToDeserialize: any): CellModel {
    let cellModel = new CellModel();

    cellModel.value = objectToDeserialize.value;
    cellModel.rowSpan = objectToDeserialize.rowSpan;
    cellModel.columnSpan = objectToDeserialize.columnSpan;
    cellModel.style = this._styleDeserializer.deserialize(
      objectToDeserialize.style,
    );

    return cellModel;
  }
}
