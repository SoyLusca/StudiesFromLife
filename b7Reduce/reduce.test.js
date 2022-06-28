const { sum } = require("./reduce");

describe("A função sum", () => {
  it("é uma função", () => {
    expect(typeof sum).toBe("function");
  });
  it("soma todos os números de um array", () => {
    expect(sum([2, 3, 6, 8])).toBe(20);
    expect(sum([9, 0, -5, 3])).toBe(7);
    expect(sum([2, 3, 6, 8])).toBe(20);
  });
});
