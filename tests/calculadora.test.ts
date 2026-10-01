import { describe, it, expect } from "vitest";
import {
  divisao,
  multiplicacao,
  somar,
  subtracao,
  resto,
} from "../dist/calculadora.js";

describe("calculadora", () => {
  it("deve somar dois numeros", () => {
    const resultado = somar(5, 7);
    expect(resultado).toBe(12);
    // resultado esperado
  }); //isso deve somar 2 numeros;

  it("deve subtair dois numeros", () => {
    const resultado2 = subtracao(7, 2);
    expect(resultado2).toBe(5);
  });

  it("deve dividir dois numeros", () => {
    const resultado3 = divisao(6, 2);
    expect(resultado3).toBe(3);
  });

  it("deve multiplicar dois numeros", () => {
    const resultado4 = multiplicacao(6, 2);
    expect(resultado4).toBe(12);
  });

  it("deve retornar o resto de dois numeros", () => {
    const resultado5 = resto(2, 2);
    expect(resultado5).toBe(0);
  });
});
