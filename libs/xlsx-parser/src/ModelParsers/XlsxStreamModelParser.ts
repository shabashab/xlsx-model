import XlsxModelParserBase from "./XlsxModelParserBase";
import * as Stream from "stream";
import StreamWorkbookProvider from "../WorkbookProviders/StreamWorkbookProvider";

export default class XlsxStreamModelParser extends XlsxModelParserBase {
  constructor(stream: Stream) {
    super(new StreamWorkbookProvider(stream));
  }
}
