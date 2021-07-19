import IWorkbookProvider from "./IWorkbookProvider";
import { Workbook } from "@xlsx-model/excel";
import * as Stream from "stream";

export default class StreamWorkbookProvider implements IWorkbookProvider {
  private readonly _stream: Stream;

  constructor(stream: Stream) {
    this._stream = stream;
  }

  async getWorkbook(): Promise<Workbook> {
    const workbook = new Workbook();
    await workbook.xlsx.read(this._stream);
    return workbook;
  }
}
