import { WorkbookModel } from "@xlsx-model/models";
import { serialize } from "typescript-json-serializer";
import { SerializableWorkbookModel } from "./models/serializableWorkbookModel";

export function serializeWorkbook(workbookModel: WorkbookModel): string {
  const serializableWorkbookModel = new SerializableWorkbookModel(workbookModel);
  return serialize(SerializableWorkbookModel);
}
