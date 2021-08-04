import * as module from "./";

describe("workbookLoader module", () => {
  it("should export loadFromFile function", () => {
    expect(typeof module.loadFromFile).toBe("function");
  });

  it("should export loadFromStream function", () => {
    expect(typeof module.loadFromStream).toBe("function");
  });
});
