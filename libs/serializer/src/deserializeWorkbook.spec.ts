import { deserializeWorkbook } from "./";

describe("deserializeWorkbook", () => {
  it("should be a function", () => {
    expect(deserializeWorkbook instanceof Function).toBeTruthy();
  });
});
