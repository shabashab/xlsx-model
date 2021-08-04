import { loadFromFile } from "./loadFromFile";
import { Workbook } from "@xlsx-model/excel";
import { Readable } from "stream";
import { loadFromStream } from "./loadFromStream";

jest.mock("@xlsx-model/excel");

const mockedWorkbook = <jest.Mock<Workbook>>Workbook;

describe("loadFromStream", () => {
  let createdWorkbook: Workbook;

  beforeEach(() => {
    mockedWorkbook.mockImplementationOnce(() => {
      let workbook = new Workbook();
      workbook = <Workbook>(<any>{
        ...workbook,
        xlsx: {
          ...workbook.xlsx,
          read: jest.fn(async () => {
            (<any>workbook).__mockChanged = true;
            return workbook;
          }),
        },
      });
      createdWorkbook = workbook;
      return workbook;
    });
  });

  it("should be a function", () => {
    expect(typeof loadFromFile).toBe("function");
  });

  it("should call read method of created workbook", async () => {
    const streamContent = "file.json";

    const stream = Readable.from([streamContent]);
    await loadFromStream(stream);

    expect(createdWorkbook).toBeDefined();
    expect(createdWorkbook.xlsx.read).toBeCalledWith(stream);
    expect((<any>createdWorkbook).__mockChanged).toBeTruthy();
  });
});
