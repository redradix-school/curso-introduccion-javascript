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
  if (cantidad > 0 && cantidad <= dinero) {
    apuesta = cantidad;
  } else {
    console.log("No!");
  }
}

// Tirar los dados

function jugar () {
  function tirada () {
    return 1 + Math.floor(Math.random() * 6);
  }
  var dado1 = tirada();
  var dado2 = tirada();

  console.log("[ " + dado1 + " ] [ " + dado2 + " ]");

  if (dado1 + dado2 == 7) {
    dinero = dinero + apuesta*10;
    console.log("Has ganado!");
    estado();
  } else if (dado1 == dado2) {
    console.log("Vuelve a jugar!");
    return jugar();
  } else {
    dinero = dinero - apuesta;
    console.log("Has perdido!");
    estado();
  }
}

// Inicialización

reset();
