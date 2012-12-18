function estaEnLaLista (lista, elemento) {
  for (var i=0; i<lista.length; i++) {
    if (elemento == lista[i]) {
      return true;
    }
  }
  return false;
}
