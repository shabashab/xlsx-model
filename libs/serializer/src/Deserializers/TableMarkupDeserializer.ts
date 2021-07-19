import { TableMarkup } from "@xlsx-model/models";
import ColumnMarkupDeserializer from "./ColumnMarkupDeserializer";
import RowMarkupDeserializer from "./RowMarkupDeserializer";

export default class TableMarkupDeserializer {
  private _columnMarkupDeserializer: ColumnMarkupDeserializer;
  private _rowMarkupDeserializer: RowMarkupDeserializer;

  constructor() {
    this._rowMarkupDeserializer = new ColumnMarkupDeserializer();
    this._columnMarkupDeserializer = new RowMarkupDeserializer();
  }

  deserialize(objectToDeserialize: any): TableMarkup {
    let tableMarkup = new TableMarkup();

    Object.entries(objectToDeserialize.rows).forEach(([key, value]) => {
      tableMarkup.rows.setValue(
        parseInt(key),
        this._rowMarkupDeserializer.deserialize(value),
      );
    });

    Object.entries(objectToDeserialize.columns).forEach(([key, value]) => {
      tableMarkup.columns.setValue(
        parseInt(key),
        this._columnMarkupDeserializer.deserialize(value),
      );
    });

    tableMarkup.rowsCount = objectToDeserialize.rowsCount;
    tableMarkup.columnsCount = objectToDeserialize.columnsCount;

    return tableMarkup;
  }
}
