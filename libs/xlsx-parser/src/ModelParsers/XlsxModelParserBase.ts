import { WorkbookModel } from "@xlsx-model/models";
import IWorkbookProvider from "../WorkbookProviders/IWorkbookProvider";
import IXlsxModelParser from "./IXlsxModelParser";
import IWorkbookParser from "../Parsers/Interfaces/IWorkbookParser";
import IWorkbookParserFactory from "../Parsers/Interfaces/IWorkbookParserFactory";
import WorkbookParserFactory from "../Parsers/WorkbookParserFactory";

export default abstract class XlsxModelParserBase implements IXlsxModelParser {
  protected workbookProvider: IWorkbookProvider;
  protected workbookParser: IWorkbookParser;

  protected constructor(
    workbookProvider: IWorkbookProvider,
    workbookParserFactory?: IWorkbookParserFactory,
  ) {
    this.workbookProvider = workbookProvider;
    if (workbookParserFactory)
      this.workbookParser = workbookParserFactory.build();
    else this.workbookParser = new WorkbookParserFactory().build();
  }

  async parse(): Promise<WorkbookModel> {
    let workbook = await this.workbookProvider.getWorkbook();
    return this.workbookParser.parse(workbook);
  }
}
