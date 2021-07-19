import JsonSchemaObjectValidator from "./JsonSchemaObjectValidator";
import SchemaWorkbookValidatorProvider from "../Providers/SchemaWorkbookValidatorProvider";
import WorkbookSchemaProvider from "../Providers/WorkbookSchemaProvider";

export default class WorkbookObjectValidator extends JsonSchemaObjectValidator {
  constructor() {
    let schemaProvider = new WorkbookSchemaProvider();
    let validatorProvider = new SchemaWorkbookValidatorProvider(schemaProvider);
    super(validatorProvider);
  }
}
