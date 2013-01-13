// Recursiva

function sumaRango(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumaRango(n-1);
  }
}

// Iterativa

function sumaRango2(n) {
  var total = 0;
  for (var i = n; i > 0; i--) {
    total += i;
  }
  return total;
}
