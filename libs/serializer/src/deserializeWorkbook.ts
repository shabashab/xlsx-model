import { WorkbookModel } from "@xlsx-model/models";
import { deserialize } from "typescript-json-serializer";
import { SerializableWorkbookModel } from "./models/serializableWorkbookModel";

export function deserializeWorkbook(json: string): WorkbookModel {
  return deserialize(json, SerializableWorkbookModel);
}
