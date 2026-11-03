import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("deberia sumar decimales sin errores de precision", () => {
    expect(sumar(0.1, 0.2)).toBe(0.3);
  });
});

