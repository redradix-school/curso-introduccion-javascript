function quitarInactivos(lista) {
  var nuevaLista = [];
  for (var i=0; i<lista.length; i++) {
    if (lista[i].activo) {
      nuevaLista.push(lista[i]);
    }
  }
  return nuevaLista;
}

var usuarios = [
  { nombre: "Pepito", activo: true },
  { nombre: "Fulanito", activo: false },
  { nombre: "Menganito", activo: false }
];

console.log(quitarInactivos(usuarios));
