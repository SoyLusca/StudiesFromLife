const sum = require("./sum");

describe("Testa a função sum", () => {
  it("Deve retornar o resultado da soma", () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });

  it("Lança erro quando o parâmetro não for do tipo numérico", () => {
    expect(() => sum(4, "5")).toThrowError();
    expect(() => sum(4, "5")).toThrowError("parameters must be numbers");
  });
});
