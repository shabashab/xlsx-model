import { Schema } from "jsonschema";

export default interface ISchemaProvider {
  readonly rootSchema: Schema;
  readonly dependencies: Schema[];
}
