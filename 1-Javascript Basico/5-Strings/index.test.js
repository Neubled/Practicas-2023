import { describe, it, expect } from "vitest";

describe("Strings", () => {
  // Obtener la letra a de la palabra "Hola" y guardarla en "char"
  it("Caracter", () => {
    let str = "Hola";
    let char= str.charAt(3) ;

    expect(char).toBe("a");
  });

  //Comparar dos string, si son iguales sumarlos en una variable, sino la variable esta vacia ""
  it("Comparar strings", () => {
    let str1 ="perro";
    let str2 ="perro";
    let suma ="";

    if (str1 === str2) {
      suma = str1 + str2;
    }

    expect(suma).toBe("perroperro");

    let str3 = "cosa";

    expect(suma).toBe("");
  });

  //Dado un string cualquiera, poner en mayuscula todos sus caracteres....
  it("Mayuscula", () => {
    let str= "gritando ando";

    let mayusculas = str.toUpperCase();

    expect(str).toBe("GRITANDO ANDO");
  });

  //Poner en mayuscula solo la primera letra del string
  it("CamelCase", () => {
    let str= "perro";

    let camelCase = str.charAt(0).toUpperCase() + str.slice(1);

    expect(str).toBe("Perro");
  });


  //Verificar si un string comienza con la palabra "Hola" o si termina con la palabra "Adios"
  it("Inico o Fin", () => {
    let str = "hola adios";
    let result = str.startsWith("Hola") || str.endsWith("Adios");;

    expect(result).toBe(true);
  });

  //Verificar que un string contenga la palabra "Mitad"
  it("Inlcuye", () => {
    let str= "esta cadena tiene la palabra mitad";
    let result = str.includes("Mitad");;

    expect(result).toBe(true);
  });


  //Reemplazar todas las ocurrencias de la palabra "cosa" en un string y reemplazarla por "hola"
  it("Reemplazo", () => {
    let str= "hola que cosa";

    let result = str.replace(/cosa/g, "hola");

    expect(str.includes("hola")).toBe(true);
  });

  //Dado un string, obtener del mismo la subcadena que comienza en el caracter 5 hasta el 10
  it("SubCadena", () => {
    let str = "Este es un string";
    let subStr  = str.substring(5, 11);;

    expect(subStr.length).toBe(5);
  });

  //Dado un string, obtener un nuevo array con todas sus palabras(Separadas por espacio)
  it("String en Array", () => {
    let str= "Este es un string";

    let arr = str.split(" ");
  
    expect(arr.length).toBeGreaterThan(0);
  });
});
