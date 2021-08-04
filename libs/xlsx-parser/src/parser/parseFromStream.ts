import { Stream } from "stream";
import { WorkbookModel } from "@xlsx-model/models";
import { loadFromStream } from "../workbookLoader";
import { parseWorkbook } from "./parseWorkbook";

export async function parseFromStream(stream: Stream): Promise<WorkbookModel> {
  const workbook = await loadFromStream(stream);
  return parseWorkbook(workbook);
}
