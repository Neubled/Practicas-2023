import { describe, it, expect } from "vitest";

describe("Operaciones Algebraicas", () => {
  // asignar los valores necesarios para que las operaciones den el resultado esperado
  it("Suma", () => {
    let x=3;
    let y=2;
    let z=5;

    expect(x + y).toBe(5);
    expect(x + y + z).toBe(10);
  });
  it("Resta", () => {
    let x=10;
    let y=5;
    let z=-(-5);

    expect(x - y).toBe(5);
    expect(x - y - z).toBe(10);
  });
  it("Multiplicacion", () => {
    let x=5;
    let y=2;
    let z=10;

    expect(x * y).toBe(10);
    expect(x * y * z).toBe(100);
  });
  it("Division", () => {
    let x=20;
    let y=2;
    let z=2;

    expect(x / y).toBe(10);
    expect(x / y / z).toBe(5);
  });
  it("Resto", () => {
    let x=20;
    let y=3;

    expect(x % y).toBe(2);
  });
  it("Operadores Unarios", () => {
    let x = 0;
    x++;

    // Utilizar un operador unario para cambiar el valor de x
    expect(x).toBe(1);
  });
});

describe("Operaciones Logicas", () => {
  it("OR", () => {
    let x=true;
    let y=false;

    expect(x || y).toBe(true);
  });
  it("AND", () => {
    let x=true;
    let y=true;

    expect(x && y).toBe(true);
  });
  it("NOT", () => {
    let x = true;
    let y = !x;

    expect(y).toBe(false);
  });
  it("Comparaciones", () => {
    let x=3;
    let y=4;
    let z=3;

    expect(x < 2).toBe(true);
    expect(y < 5).toBe(true);
    expect(z >= 3).toBe(true);
    expect(x == "3").toBe(true);
    expect(x === 3).toBe(true);
  });

  it("Short Circuit Evaluation", () => {
    let x = 10;
    let y;

    expect(y || x).toBe(10);
    expect(y && x).toBe(false);
  });
});
