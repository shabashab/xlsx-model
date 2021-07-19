import XlsxModelParserBase from "./XlsxModelParserBase";
import FileWorkbookProvider from "../WorkbookProviders/FileWorkbookProvider";

export default class XlsxFileModelParser extends XlsxModelParserBase {
  constructor(fileName: string) {
    super(new FileWorkbookProvider(fileName));
  }
}
