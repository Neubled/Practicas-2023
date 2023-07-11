const pantalla = document.querySelector(".pantalla");
const btnsNumeros = [...document.querySelectorAll(".btn")];
const btnsOperadores = [...document.querySelectorAll(".btn_f")];

let expresion = [];
let indiceExpresion = 0;

const OPERADORES = ["+", "-", "*", "/"];

btnsNumeros.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (expresion.length !== 0 && OPERADORES.includes(expresion[indiceExpresion])) indiceExpresion++;

    expresion[indiceExpresion] = expresion[indiceExpresion] ?? "";
    expresion[indiceExpresion] += btn.dataset.value;

    // Extra: agregar numeros con coma
    // Extra: agregar numeros negativos

    console.log(expresion);
  });
});

btnsOperadores.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (expresion.length === 0) return;
    if (!OPERADORES.includes(expresion[indiceExpresion])) indiceExpresion++;
    expresion[indiceExpresion] = btn.dataset.value;

    // 1) Implementar un comportamiento distinto para la tecla "C" y "="

    console.log(expresion);
  });
});

/**
 * actualiza el valor de la pantalla
 * @param {string} value
 */
const refrescarPantalla = (value) => {
  // actualiza el valor de la pantalla
};

/**
 * calcula el resultado de la expresion pasada por parametro
 * @param {string[]} expresion un arreglo de numeros y operadores
 * @return el valor resultante de la operacion o un objeto de error
 */
const calcularResultado = (expresion) => {
  // usar eval
  // tener en cuenta los siguientes errores
  // 1. division por 0
  // 2. operador suelto al final

  return 0;
};

/*
{
    error: "mensaje de error",
    descripcion: "descripcion mas extensa del error"
}
*/
// si haces algun extra: agregar test ANTES de arrancar a desarrollarlo
const test = () => {
    if (calcularResultado(["2", "+", "2"]) !== 4) return false;
    if (calcularResultado(["2", "-", "2"]) !== 0) return false;
    if (calcularResultado(["2", "*", "4"]) !== 8) return false;
    if (calcularResultado(["8", "/", "2"]) !== 4) return false;
    if (calcularResultado(["2", "+", "2", "+", "2"]) !== 6) return false;
    if (calcularResultado(["2", "*", "2", "+", "2"]) !== 6) return false;
    if (!Object.keys(calcularResultado(["2", "/", "0"]))["error"]) return false;
    if (calcularResultado(["2", "/", "0"]).error !== "Error: division por 0") return false;
    if (calcularResultado(["2", "/"]).error !== "Error: operacion incompleta") return false;
  
    return true;
  };
  
  console.log(test());