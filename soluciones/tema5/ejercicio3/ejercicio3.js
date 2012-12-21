$(function () {
  function ponEventos (linea) {
    var mensajes = ["primero", "segundo", "tercero"];
    var posicion = 0;
    var tamano = 30;

    var cabecera = $(linea).find("h4");

    $(linea).find(".dime-algo").click(function (e) {
      alert("jarl")
      cabecera.html(mensajes[posicion]);
      posicion = posicion + 1;
      if (posicion >= mensajes.length) {
        posicion = 0;
      }
    });

    $(linea).find(".aumentar").click(function (e) {
    });

    $(linea).find(".reducir").click(function (e) {
    });

    $(linea).find(".ocultar").click(function (e) {
    });

    $(linea).find(".mostrar").click(function (e) {
    });

  }

  var lineas = $(".linea");

  for (var i=0; i<lineas.length; i++) {
    ponEventos(lineas[i]);
  }
});
