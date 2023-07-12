const pantalla = document.querySelector(".pantalla");
const btnsNumeros = [...document.querySelectorAll(".btn")];
const btnsOperadores = [...document.querySelectorAll(".btn_f")];
const btnParentesis = [...document.querySelectorAll(".btn_parentesis")];
const btnflecha = document.querySelector(".btn_flecha");
  
let expresion = [];
let indiceExpresion = 0;

const OPERADORES = ["+", "-", "*", "/"];

btnsNumeros.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (expresion.length !== 0 && OPERADORES.includes(expresion[indiceExpresion])) indiceExpresion++;

    expresion[indiceExpresion] = expresion[indiceExpresion] ?? "";
    expresion[indiceExpresion] += btn.dataset.value;
    pantalla.innerText += btn.dataset.value;
    
    // Extra: agregar numeros negativos

    console.log(expresion);
  });
});

btnsOperadores.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (expresion.length === 0) return;
     if (btn.dataset.value === "c") {
   pantalla.innerText = ""
   return
 } else if (btn.dataset.value === "=") {
   console.log(pantalla.innerText);
   console.log("entre");
   pantalla.innerText = eval(pantalla.innerText);
return
    }
 if (!OPERADORES.includes(expresion[indiceExpresion])) indiceExpresion++;
      expresion[indiceExpresion] = btn.dataset.value;
      pantalla.innerText += btn.dataset.value;

      // 1) Implementar un comportamiento distinto para la tecla "C" y "="

      console.log(expresion);
    });
  });
  btnParentesis.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (expresion.length !== 0 && OPERADORES.includes(expresion[indiceExpresion])) indiceExpresion++;

      expresion[indiceExpresion] = expresion[indiceExpresion] ?? "";
      expresion[indiceExpresion] += btn.dataset.value;
      
      pantalla.innerText += btn.dataset.value;
      
      // Extra: agregar numeros negativos

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
  btnflecha.addEventListener("click", () => {
      if (expresion.length !== 0 && OPERADORES.includes(expresion[indiceExpresion])) indiceExpresion++;
      
    pantalla.innerText =  pantalla.innerText.slice(0, -1);


      console.log(expresion);
    });