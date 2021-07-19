import IWorkbookProvider from "./IWorkbookProvider";
import { Workbook } from "@xlsx-model/excel";

export default class FileWorkbookProvider implements IWorkbookProvider {
  private readonly _fileName: string;

  constructor(fileName: string) {
    this._fileName = fileName;
  }

  async getWorkbook(): Promise<Workbook> {
    const workbook = new Workbook();
    await workbook.xlsx.readFile(this._fileName);
    return workbook;
  }
}
