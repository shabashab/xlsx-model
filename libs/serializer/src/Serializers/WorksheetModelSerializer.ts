import { WorksheetModel } from "@xlsx-model/models";
import ObjectDictionary from "../Types/ObjectDictionary";
import TableMarkupSerializer from "./TableMarkupSerializer";
import RowModelSerializer from "./RowModelSerializer";

export default class WorksheetModelSerializer {
  private _markupSerializer: TableMarkupSerializer;
  private _rowSerializer: RowModelSerializer;

  constructor() {
    this._markupSerializer = new TableMarkupSerializer();
    this._rowSerializer = new RowModelSerializer();
  }

  serialize(worksheetModel: WorksheetModel): object {
    let result = {
      name: worksheetModel.name,
      rows: {} as ObjectDictionary,
      tableMarkup: {} as object,
    };

    result.tableMarkup = this._markupSerializer.serialize(
      worksheetModel.tableMarkup,
    );

    worksheetModel.rows.forEach((key, value) => {
      result.rows[key.toString()] = this._rowSerializer.serialize(value);
    });

    return result;
  }
}
