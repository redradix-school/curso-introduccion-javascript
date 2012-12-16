var dinero;
var apuesta;

// Reiniciar el estado del juego

function reset () {
  dinero = 100;
  apuesta = 10;
}

// Consultar el estado actual

function estado () {
  console.log("Ahora tienes: " + dinero + " €");
  console.log("Tu apuesta está en: " + apuesta + " €");
}

// Fijar la apuesta

function apostar (cantidad) {
  if (cantidad <= dinero) {
    apuesta = cantidad;
  } else {
    console.log("No!");
  }
}

// Tirar los dados

function jugar () {
}

// Inicialización

reset();