import { WorksheetModel } from "@xlsx-model/models";
import RowModelDeserializer from "./RowModelDeserializer";
import TableMarkupDeserializer from "./TableMarkupDeserializer";

export default class WorksheetModelDeserializer {
  private _rowDeserializer: RowModelDeserializer;
  private _markupDeserializer: TableMarkupDeserializer;

  constructor() {
    this._rowDeserializer = new RowModelDeserializer();
    this._markupDeserializer = new TableMarkupDeserializer();
  }

  deserialize(objectToDeserialize: any): WorksheetModel {
    let worksheetModel = new WorksheetModel();

    worksheetModel.name = objectToDeserialize.name;
    worksheetModel.tableMarkup = this._markupDeserializer.deserialize(
      objectToDeserialize.tableMarkup,
    );

    Object.entries(objectToDeserialize.rows).forEach(([entry, value]) => {
      if (!entry) return;
      worksheetModel.rows.setValue(
        parseInt(entry),
        this._rowDeserializer.deserialize(value as any),
      );
    });

    return worksheetModel;
  }
}
