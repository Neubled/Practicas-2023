import { describe, it, expect } from "vitest";
// import { sum, pot, isMultiple, fibonacci, removeSpaces, mayusMinus, oldDate } from "../answer";

describe("Funciones", () => {
  it("Matematicas", () => {
    /**
     * Programar una funcion que reciba 2 numeros enteros y devuelva la suma de los mismos
     */

    function suma(num1, num2) {
      return num1 + num2;
    }
    expect(sum(2, 2)).toBe(4);

    /**
     * Programar una funcion que reciba un numero entero n y un numero entero x.
     * Esta funcion debe retornar la x potencia del numero n, es decir n^x
     */
    function potencia(n, x) {
      return Math.pow(n, x);
    }
    expect(pot(2, 4)).toBe(16);

    /**
     * Programar una funcion que reciba un numero entero n y un arreglo de numeros enteros arr
     * Esta funcion debe devolver true si si n es multiplo de todos los numeros en arr
     */

    function isMultiple(n, arr) {
      for (let i = 0; i < arr.length; i++) {
        if (n % arr[i] !== 0) {
          return false;
     }
  }
  return true;
}
    expect(isMultiple(8, [2, 4])).toBe(true);
    expect(isMultiple(8, [2, 3])).toBe(false);

    /**
     * Programar una funcion que reciba un numero entero n
     * Esta funcion deve devolver un arreglo con todos los numeros de fibonacci hasta n inclusive
     */

const fibonacci =(n)=> {
  const arr = [1,1];
  while (arr,at(-1)<n){
    arr.push(arr.at(-1)+arr.at(-2) );

  }

return arr;
};
    expect(fibonacci(21)).toStrictEqual([1, 1, 2, 3, 5, 8, 13, 21]);
  });

  it("Strings", () => {
    /**
     * Programar una funcion que reciba un String str
     * Esta funcion debe retortar el mismo string pero sin espacios
     *
     */




    

    expect(removeSpaces("Hola soy una cadena de caracteres")).toBe("Holasoyunacadenadecaracteres");

    const mayusMinus2 = (str) => {
      return str
        .split(" ")
        .map((word, i) => {
          if (i % 2 == 0) return word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase();
          return word.charAt(0).toLowerCase() + word.slice(1, word.length).toUpperCase();
        })
        .join(" ");
    };

    /**
     * Programar una funcion que reciba un String str
     * Esta funcion debe hacer que todas las palabras pares comiencen con mayuscula y tengan el resto en minuscula
     * y las palabras inpares deben comenzar con mayuscula y tener el resto en mayuscula
     * 
     */
     const mayusMinus = (string)=> {
      let palabras = string.split(" ");
      palabras= palabras.map((word,i) =>{
      });
      
        if(i % 2 === 0) {
        return (
        word.charAt(0).toUpperCase() + word.slice(1,word.length).toLowerCase() 
        );
      }else {
        return (
          word.charAt(0),toLowercase()+ word.slice(1,word.length).toUpperCase() 
          );
      }

    };
    return palabras.join(" ");

  });

    expect(mayusMinus("Hola soy una cadena de caracteres")).toBe("hOLA Soy uNA Cadena dE Caracteres");
   

  
  it("Fechas", () => {

    /**
     * Programar una funcion que reciba 2 fechas en formato string, date1 y date2
     * Esta funcion debe retornar true si date1 es mas vieja que date2
     * Ademas debe retornar error si el formato de la fecha es erroneo
     *  Nota: debe usar la clase Date() de JS
     */
    function isDate1Older(date1, date2) {
      const dateObj1 = new Date(date1);
      const dateObj2 = new Date(date2);
    
      if (isNaN(dateObj1.getTime()) || isNaN(dateObj2.getTime())) {
        throw new Error("Formato de fecha inválido");
      }
    
      return dateObj1 < dateObj2;
    }

    expect(oldDate("2022-01-01", "2020-01-01")).toBe(true);
    expect(oldDate("2022-01-01", "2023-01-01")).toBe(false);
  });
});
