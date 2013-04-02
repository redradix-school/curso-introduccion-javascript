$(function() {

  // Listado

  function ponEventosListado (fila, id) {
    fila.click(function (e) {
      cargaUsuario(id);
    });
  }

  function mostrarListado (usuarios) {
    var tabla = $("#listado");
    var fila;
    for (var i=0; i<usuarios.length; i++) {
      fila = $("<tr>");
      fila.append($("<td>").html(usuarios[i].id));
      fila.append($("<td>").html(usuarios[i].nombre));
      ponEventosListado(fila, usuarios[i].id);
      tabla.append(fila);
    }
  }

  // Primera llamada: cargar el listado

  $.ajax({
    url: "/users",
    type: "GET",
    success: mostrarListado
  });

  // Cargar los datos de un usuario por AJAX

  function cargaUsuario (id) {
    $.ajax({
      url: "/users/" + id,
      type: "GET",
      success: mostrarDetalles
    });
  }

  // Mostrar los detalles de un usuario

  function mostrarDetalles (usuario) {
    $("#id").html(usuario.id);
    $("#nombre").html(usuario.nombre);
    $("#username").html(usuario.username);
    $("#nacimiento").html(usuario.nacimiento);
    $("#posts").html(usuario.posts);
  }

});
