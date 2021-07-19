import { ValidationError } from "jsonschema";

export default interface IObjectValidator {
  validate(objectToValidate: object): boolean | ValidationError[];
}
