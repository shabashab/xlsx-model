import { loadFromFile } from "./loadFromFile";
import { Workbook } from "@xlsx-model/excel";

jest.mock("@xlsx-model/excel");

const mockedWorkbook = <jest.Mock<Workbook>>Workbook;

describe("loadFromFile", () => {
  let createdWorkbook: Workbook;

  beforeEach(() => {
    mockedWorkbook.mockImplementationOnce(() => {
      let workbook = new Workbook();
      workbook = <Workbook>(<any>{
        ...workbook,
        xlsx: {
          ...workbook.xlsx,
          readFile: jest.fn(async () => {
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

  it("should call readFile method of created workbook", async () => {
    const fileName = "file.json";
    await loadFromFile(fileName);

    expect(createdWorkbook).toBeDefined();
    expect(createdWorkbook.xlsx.readFile).toBeCalledWith(fileName);
    expect((<any>createdWorkbook).__mockChanged).toBeTruthy();
  });
});
