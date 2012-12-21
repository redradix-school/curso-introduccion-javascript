$(function () {
  function ponEventos (linea) {
    var mensajes = ["primero", "segundo", "tercero"];
    var posicion = 0;

    $(linea).find(".dime-algo").click(function (e) {
      $(linea).find("h4").html(mensajes[posicion]);
      posicion = posicion + 1;
      if (posicion >= mensajes.length) {
        posicion = 0;
      }
    });

    $(linea).find(".borrar").click(function (e) {
      $(linea).find("h4").html("");
    });
  }

  var lineas = $(".linea");

  for (var i=0; i<lineas.length; i++) {
    ponEventos(lineas[i]);
  }
});
