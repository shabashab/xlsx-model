import { Workbook } from "@xlsx-model/excel";
import WorkbookParserFactory from "../Parsers/WorkbookParserFactory";

export function parseWorkbook(workbook: Workbook) {
  const workbookParser = new WorkbookParserFactory().build();
  return workbookParser.parse(workbook);
}