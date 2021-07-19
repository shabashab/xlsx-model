import { TableMarkup } from "@xlsx-model/models";
import ObjectDictionary from "../Types/ObjectDictionary";
import RowMarkupSerializer from "./RowMarkupSerializer";
import ColumnMarkupSerializer from "./ColumnMarkupSerializer";

export default class TableMarkupSerializer {
  private _rowMarkupSerializer: RowMarkupSerializer;
  private _columnMarkupSerializer: ColumnMarkupSerializer;

  constructor() {
    this._rowMarkupSerializer = new RowMarkupSerializer();
    this._columnMarkupSerializer = new ColumnMarkupSerializer();
  }

  serialize(tableMarkup: TableMarkup): object {
    let result = {
      rows: {} as ObjectDictionary,
      columns: {} as ObjectDictionary,
      rowsCount: 0,
      columnsCount: 0,
    };

    tableMarkup.rows.forEach((key, value) => {
      result.rows[key.toString()] = this._rowMarkupSerializer.serialize(value);
    });

    tableMarkup.columns.forEach((key, value) => {
      result.columns[key.toString()] = this._columnMarkupSerializer.serialize(
        value,
      );
    });

    result.rowsCount = tableMarkup.rowsCount;
    result.columnsCount = tableMarkup.columnsCount;

    return result;
  }
}
