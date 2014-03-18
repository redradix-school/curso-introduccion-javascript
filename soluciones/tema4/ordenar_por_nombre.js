function eliminarElemento(lista, elemento) {
  var nuevaLista = [];
  for (var i=0; i<lista.length; i++) {
    if (lista[i] != elemento) {
      nuevaLista.push(lista[i]);
    }
  }
  return nuevaLista;
}

function nombreMenor(listaUsuarios) {
  var menor = listaUsuarios[0];
  for (var i=1; i<listaUsuarios.length; i++) {
    if (listaUsuarios[i].nombre < menor.nombre) {
      menor = listaUsuarios[i];
    }
  }
  return menor;
}

function ordenarPorNombre(listaUsuarios) {
  var nuevaLista = [],
      siguiente;
  while (listaUsuarios.length > 0) {
    siguiente = nombreMenor(listaUsaurios);
    nuevaLista.push(siguiente);
    listaUsuarios = eliminarElemento(listaUsaurios, siguiente);
  }
  return nuevaLista;
}

var usuarios = [
  { nombre: "Pepito", activo: true },
  { nombre: "Fulanito", activo: false },
  { nombre: "Menganito", activo: false }
];

function quitarInactivos(listaUsuarios) {
  var usuariosActivos = [],
      usuario;
  for (var i=0; i<listaUsuarios.length; i++) {
    usuario = listaUsuarios[i];
    if (usuario.activo) {
      usuariosActivos.push(usuario);
    }
  }
  return usuariosActivos;
}

console.log(quitarInactivos(usuarios));
