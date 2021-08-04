import { WorkbookModel } from "@xlsx-model/models";
import { loadFromFile } from "../workbookLoader";
import { parseWorkbook } from "./parseWorkbook";

export async function parseFromFile(fileName: string): Promise<WorkbookModel> {
  const workbook = await loadFromFile(fileName);
  return parseWorkbook(workbook);
}
