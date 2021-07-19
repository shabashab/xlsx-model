import { Workbook } from "@xlsx-model/excel";

export default interface IWorkbookProvider {
  getWorkbook(): Promise<Workbook>;
}
