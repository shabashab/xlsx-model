import { Worksheet } from "@xlsx-model/excel";
import { WorksheetModel } from "@xlsx-model/models";

export default interface IWorksheetMergesParser {
  parse(
    worksheet: Worksheet,
    inputModel: WorksheetModel,
  ): WorksheetModel | undefined;
}
