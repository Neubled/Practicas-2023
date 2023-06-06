
async function creartablero() {
  const tablero = [];
  for (let i = 0; i < 3; i++) {
    tablero.push(["-", "-", "-"]);
  }
  return tablero;
}

async function Imprimirtablero(tablero) {
  for (let i = 0; i < tablero; i++) {
    console.log(tablero.join(" | "));
    if (i < tablero - 1) {
      console.log("-----------");
    }
  }
}

import inquirer, { createPromptModule } from "inquirer";
async function promptcolumna() {
  const answers = await inquirer.prompt({
    type: "input",
    name: "columna",
    message: "selecciona una columna:",
  });
  return answers.columna;
}

async function promptfila() {
  const answers = await inquirer.prompt({
    type: "input",
    name: "fila",
    message: "selecciona una fila:",
  });
  return answers.fila;
}

function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(' '));
  }
}

// Ejemplo de uso:
const matriz = [
  [ '-', '-', '-' ],
  [ '-', '-', '-' ],
  [ '-', '-', '-' ]
];

imprimirMatriz(matriz);

// async function asignarValor() {
//   const columna = await promptcolumna();
//   const fila = await promptfila();

//   matriz[fila][columna] = 'X';

//   console.log(matriz);
// }

asignarValor();

let jugadorActual = 'X';

async function asignarValor() {
  const columna = await promptcolumna();
  const fila = await promptfila();

  matriz[fila][columna] = jugadorActual;

  console.log(matriz);

  jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
}


function verificarGanador() {
  const jugadores = ['X', 'O'];

  for (let i = 0; i < jugadores.length; i++) {
    const jugador = jugadores[i];

    // Verificar filas
    for (let j = 0; j < 3; j++) {
      if (
        matriz[j][0] === jugador &&
        matriz[j][1] === jugador &&
        matriz[j][2] === jugador
      ) {
        return jugador;
      }
    }

    // Verificar columnas
    for (let j = 0; j < 3; j++) {
      if (
        matriz[0][j] === jugador &&
        matriz[1][j] === jugador &&
        matriz[2][j] === jugador
      ) {
        return jugador;
      }
    }

    // Verificar diagonales
    if (
      matriz[0][0] === jugador &&
      matriz[1][1] === jugador &&
      matriz[2][2] === jugador
    ) {
      return jugador;
    }

    if (
      matriz[0][2] === jugador &&
      matriz[1][1] === jugador &&
      matriz[2][0] === jugador
    ) {
      return jugador;
    }
  }

  return null; // No hay ganador
}

// const matriz = creartablero();

// async function jugar() {
//   let jugadorActual = 'X';

//   while (true) {
//     console.log("Turno del jugador " + jugadorActual);
//     Imprimirtablero(matriz);

//     const columna = await promptcolumna();
//     const fila = await promptfila();

//     matriz[fila][columna] = jugadorActual;

//     const ganador = verificarGanador();
//     if (ganador) {
//       console.log("¡El jugador " + ganador + " ha ganado!");
//       break;
//     }

//     if (tableroCompleto(matriz)) {
//       console.log("¡Empate!");
//       break;
//     }

//     jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
//   }
// }

// function tableroCompleto(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[i].length; j++) {
//       if (matriz[i][j] === '-') {
//         return false;
//       }
//     }
//   }
//   return true;
// }


// jugar();
async function main() {
  try {
    console.log("¡Bienvenidos al Ta-Te-Ti!");
    console.log("--------------------------------");
    console.log("Tablero:");
    console.log("columnas | , filas -");
    console.log([ [ '0.0', '1.0', '2.0' ]]);
    console.log([ [ '0.1', '1.1', '2.1' ]]);
    console.log([ [ '0.2', '1.2', '2.2' ]]);
    console.log("--------------------------------");
    
    const ctablero = await creartablero();
    console.log(ctablero);
    const tablero = await Imprimirtablero();
    const columna = await promptcolumna();
    const fila = await promptfila();
    const turnos =  await asignarValor();
    const ganador = await verificarGanador();
    const Juego =  await jugarTaTeTi();

    console.log("tu posicion es ${nombre}");
  } catch (error) {
    console.error(error);
  }
}

main();