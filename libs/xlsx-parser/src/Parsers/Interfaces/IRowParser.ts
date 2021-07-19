import { Row } from "@xlsx-model/excel";
import { RowModel } from "@xlsx-model/models";

export default interface IRowParser {
  parse(row: Row): RowModel;
}
