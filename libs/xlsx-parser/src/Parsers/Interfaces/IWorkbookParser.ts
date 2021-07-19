import { Workbook } from "@xlsx-model/excel";
import { WorkbookModel } from "@xlsx-model/models";

export default interface IWorkbookParser {
  parse(workbook: Workbook): WorkbookModel;
}
