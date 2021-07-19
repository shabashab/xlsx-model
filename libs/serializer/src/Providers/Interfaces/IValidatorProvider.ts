import { Validator } from "jsonschema";
import ISchemaProvider from "./ISchemaProvider";

export default interface IValidatorProvider {
  readonly schemaProvider: ISchemaProvider;
  readonly validator: Validator;
}
