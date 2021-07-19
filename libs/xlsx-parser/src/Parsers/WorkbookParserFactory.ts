import IWorkbookParserFactory from "./Interfaces/IWorkbookParserFactory";
import IWorkbookParser from "./Interfaces/IWorkbookParser";

import WorkbookParser from "./WorkbookParser";
import WorksheetParser from "./WorksheetParser";
import WorksheetMergesParser from "./WorksheetMergesParser";
import WorksheetMarkupParser from "./WorksheetMarkupParser";
import RowParser from "./RowParser";
import CellParser from "./CellParser";
import CellStyleParser from "./CellStyleParser";
import ICellParser from "./Interfaces/ICellParser";

export default class WorkbookParserFactory implements IWorkbookParserFactory {
  private static buildCellParser(): CellParser {
    let cellStyleParser = new CellStyleParser();
    return new CellParser(cellStyleParser);
  }

  private static buildWorksheetParser(
    cellParser: ICellParser,
  ): WorksheetParser {
    let mergesParser = new WorksheetMergesParser();
    let markupParser = new WorksheetMarkupParser();
    let rowParser = new RowParser(cellParser);
    return new WorksheetParser(rowParser, markupParser, mergesParser);
  }

  build(): IWorkbookParser {
    let cellParser = WorkbookParserFactory.buildCellParser();
    let worksheetParser = WorkbookParserFactory.buildWorksheetParser(
      cellParser,
    );
    return new WorkbookParser(worksheetParser);
  }
}
