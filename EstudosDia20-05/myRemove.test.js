const { expect } = require("expect");
const myRemove = require("./myRemove");

describe("Testes do myRemove", () => {
  it("Se dado os parâmetros '[1, 2, 3, 4], 3', retorna o array [1, 2, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  });

  it("Se dado os parâmetros '[1, 2, 3, 4],3' NÃO retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
  });

  it.only("myRemove([1, 2, 3, 4], 5) === [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  });
});
