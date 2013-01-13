function sonIguales (lista1, lista2) {
  if (lista1.length != lista2.length) {
    return false;
  } else {
    for (var i=0; i<lista1.length; i++) {
      if (lista1[i] != lista2[i]) {
        return false;
      }
    }
    return true;
  }
}
