import IObjectValidator from "./Interfaces/IObjectValidator";
import IValidatorProvider from "../Providers/Interfaces/IValidatorProvider";
import { ValidationError } from "jsonschema";

export default abstract class JsonSchemaObjectValidator
  implements IObjectValidator {
  private _validatorProvider: IValidatorProvider;

  protected constructor(validatorProvider: IValidatorProvider) {
    this._validatorProvider = validatorProvider;
  }

  validate(objectToValidate: object): boolean | ValidationError[] {
    let validator = this._validatorProvider.validator;
    let result = validator.validate(
      objectToValidate,
      this._validatorProvider.schemaProvider.rootSchema,
    );

    let isValid = result.valid;

    if (!isValid) return result.errors;
    return isValid;
  }
}
