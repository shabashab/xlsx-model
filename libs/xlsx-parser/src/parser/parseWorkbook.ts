import { Workbook } from "@xlsx-model/excel";
import { WorkbookModel } from "@xlsx-model/models";
import WorkbookParserFactory from "../Parsers/WorkbookParserFactory";

export function parseWorkbook(workbook: Workbook): WorkbookModel {
  const workbookParser = new WorkbookParserFactory().build();
  return workbookParser.parse(workbook);
}
