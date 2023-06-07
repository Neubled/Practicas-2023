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

function crearmatriz() {
  return [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ];
}

function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
  }
}

function verificarGanador(matriz) {
  const jugadores = ["X", "O"];

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
async function jugarTaTeTi(matriz) {
  let jugadorActual = "X";
  let contadorTurnos = 0;

  while (true) {
    console.log("Turno del jugador:", jugadorActual);
    const columna = await promptcolumna();
    const fila = await promptfila();
    if (fila > 2 || columna > 2 || fila < 0 || columna < 0) {
      console.log("el numero seleccionado esta fuera de rango");

      continue;
    }

    if (matriz[fila][columna] !== "-") {
      console.log(
        "La posición seleccionada ya está ocupada. Intenta nuevamente."
      );
      continue;
    }

    matriz[fila][columna] = jugadorActual;

    contadorTurnos++;
    console.log("turnos:", contadorTurnos);

    if (verificarGanador(matriz)) {
      console.log("¡El jugador", jugadorActual, "ha ganado!");
      return matriz;
    } else if (contadorTurnos === 9) {
      console.log("¡El juego ha terminado en empate!");
      return matriz;
    }

    jugadorActual = jugadorActual === "X" ? "O" : "X";
    imprimirMatriz(matriz);
  }
}

async function main() {
  try {
    console.log("¡BIENNVENIDOS AL TA-TE-TI!");
    console.log("--------------------------------");
    console.log("Tablero:");
    console.log("columnas | , filas -");
    console.log([["0.0", "1.0", "2.0"]]);
    console.log([["0.1", "1.1", "2.1"]]);
    console.log([["0.2", "1.2", "2.2"]]);
    console.log("--------------------------------");
    console.log("Jugador inicial X");

    const ctablero = crearmatriz();
    imprimirMatriz(ctablero);
    const Juego = await jugarTaTeTi(ctablero);
    imprimirMatriz(Juego);
    console.log("GRACIAS POR JUGAR!!!");
  } catch (error) {
    console.error(error);
  }
}

main();
