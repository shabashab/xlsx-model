import IWorkbookParser from "./IWorkbookParser";

export default interface IWorkbookParserFactory {
  build(): IWorkbookParser;
}
