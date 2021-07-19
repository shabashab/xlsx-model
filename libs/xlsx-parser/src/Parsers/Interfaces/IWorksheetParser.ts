import { Worksheet } from "@xlsx-model/excel";
import { WorksheetModel } from "@xlsx-model/models";

export default interface IWorksheetParser {
  parse(worksheet: Worksheet): WorksheetModel;
}
