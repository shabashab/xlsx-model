import { serializeWorkbook } from ".";

describe("serializeWorkbook", () => {
  it("should be a function", () => {
    expect(serializeWorkbook instanceof Function).toBeTruthy();
  });
});
