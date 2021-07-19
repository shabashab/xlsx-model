import { Worksheet } from "@xlsx-model/excel";
import { TableMarkup } from "@xlsx-model/models";

export default interface IWorksheetMarkupParser {
  parse(worksheet: Worksheet): TableMarkup;
}
