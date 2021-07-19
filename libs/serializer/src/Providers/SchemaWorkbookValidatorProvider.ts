import IValidatorProvider from "./Interfaces/IValidatorProvider";
import { Validator } from "jsonschema";
import ISchemaProvider from "./Interfaces/ISchemaProvider";

export default class SchemaWorkbookValidatorProvider
  implements IValidatorProvider {
  private readonly _schemaProvider: ISchemaProvider;

  constructor(schemaProvider: ISchemaProvider) {
    this._schemaProvider = schemaProvider;
  }

  public get validator(): Validator {
    let validator = new Validator();

    this._schemaProvider.dependencies.forEach((dependency) => {
      validator.addSchema(dependency);
    });

    return validator;
  }

  public get schemaProvider(): ISchemaProvider {
    return this._schemaProvider;
  }
}
