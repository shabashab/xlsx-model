import { loadFromFile } from "./loadFromFile";
import { Workbook } from "@xlsx-model/excel";
import * as faker from "faker";

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
    const filePath = faker.system.filePath();
    await loadFromFile(filePath);

    expect(createdWorkbook).toBeDefined();
    expect(createdWorkbook.xlsx.readFile).toBeCalledWith(filePath);
    expect((<any>createdWorkbook).__mockChanged).toBeTruthy();
  });
});
