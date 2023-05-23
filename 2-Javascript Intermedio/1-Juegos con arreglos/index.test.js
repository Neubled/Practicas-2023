import { describe, it, expect } from "vitest";
import {
  numberSpiral,
  numberSpiralConditional,
  primeNumber,
  fibonacciNumber,
} from "../answers";

describe("Juegos con arreglos", () => {
  it("Espiral de numeros", () => {
    /**
     * Dada una funcion numberSpiral(n) donde n es un numero entero
     * La funcion debe retornar una matriz que simule una espiral de numeros desde 1 hasta n
     */

    function numberSpiral(n) {
      const tam = Math.ceil(Math.sqrt(n));
      const matriz= [];

     for (let i = 0; i < tam; i++) {
       matriz.push(new Array(tam).fill(0));
  }

      let x = Math.floor(tam / 2);
      let y = Math.floor(tam / 2);

      let num = 1;

      let dx = 0;
      let dy = -1; 

      for (let i = 1; i <= n; i++) {

        matriz[y][x] = num;
        num++;

      
          // Cambiar de dirección según el sentido de las manecillas del reloj: derecha -> abajo -> izquierda -> arriba
          const temp = dx;
          dx = -dy;
          dy = temp;
        
        x += dx; // Mover en la dirección actual en el eje x
        y += dy; // Mover en la dirección actual en el eje y
      }
      if (x === y + 1 && x > 0) {
        dx = 0;
        dy = 1;
      } else if (x === y && x < 0) {
        dx = 1;
        dy = 0;
      } else if (x === y && x > 0) {
        dx = -1;
        dy = 0;
      } else if (x === 1 - y && x < 0) {
        dx = 0;
        dy = -1;
      }
    }
      return matriz;
    });      
   
    const result = numberSpiral(9);
  console.log(result);

    expect(numberSpiral(9)).toStrictEqual([
      [5, 4, 3],
      [6, 1, 2],
      [7, 8, 9],
    ]);


    const result2 = numberSpiral(25);
  console.log(result2);

    expect(numberSpiral(25)).toStrictEqual([
      [17, 16, 15, 14, 13],
      [18, 5, 4, 3, 12],
      [19, 6, 1, 2, 11],
      [20, 7, 8, 9, 10],
      [21, 22, 23, 24, 25],
    ]);


    const result3 = numberSpiral(7);
    console.log(result3);

    expect(numberSpiral(7)).toStrictEqual([
      [5, 4, 3],
      [6, 1, 2],
      [7, -1, -1],
    ]);
  });


  it("Espiral de numeros con condiciones", () => {
    /**
     * Editar la funcion del ejercicio anterior para que acepte una funcion que decida que numero agregar
     * Ademas completar las siguientes funciones:
     * primeNumber(n): devuelve true si el numero es primo
     * fibonacciNumber(n): devuelve true si el numero pertenece a la sucesion de Fibonacci
     */

    // ejemplo, una espiral de solo numeros pares
    expect(numberSpiralConditional(9, (n) => n % 2 == 0)).toStrictEqual([
      [-1, 4, -1],
      [6, -1, 2],
      [-1, 8, -1],
    ]);

    // espiral de numeros primos
    expect(numberSpiralConditional(9, primeNumber)).toStrictEqual([
      [5, -1, 3],
      [-1, 1, 2],
      [7, -1, -1],
    ]);

    // espiral de fibonacci
    expect(numberSpiralConditional(9, fibonacciNumber)).toStrictEqual([
      [5, -1, 3],
      [-1, 1, 2],
      [-1, 8, -1],
    ]);
  });

