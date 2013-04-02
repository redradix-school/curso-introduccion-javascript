$(function () {

  var mensajes = ["primero", "segundo", "tercero"];
  var posicion = 0;

  $("#dime-algo").click(function (e) {
    $("#mensaje").html(mensajes[posicion]);
    posicion = posicion + 1;
    if (posicion >= mensajes.length) {
      posicion = 0;
    }
  });

  $("#borrar").click(function (e) {
    $("#mensaje").html("");
  });
});
