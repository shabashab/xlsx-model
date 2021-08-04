import { Stream } from "stream";
import { WorkbookModel } from "@xlsx-model/models";
import { Workbook } from "@xlsx-model/excel";
import { loadFromFile, loadFromStream } from "./loadWorkbook";
import WorkbookParserFactory from "./Parsers/WorkbookParserFactory";

function parseWorkbook(workbook: Workbook) {
  const workbookParser = new WorkbookParserFactory().build();
  return workbookParser.parse(workbook);
}

export async function parseFromFile(fileName: string): Promise<WorkbookModel> {
  const workbook = await loadFromFile(fileName);
  return parseWorkbook(workbook);
}

export async function parseFromStream(stream: Stream): Promise<WorkbookModel> {
  const workbook = await loadFromStream(stream);
  return parseWorkbook(workbook);
}
