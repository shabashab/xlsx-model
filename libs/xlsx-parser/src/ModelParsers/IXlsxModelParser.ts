import { WorkbookModel } from "@xlsx-model/models";

export default interface IXlsxModelParser {
  parse(): Promise<WorkbookModel>;
}
