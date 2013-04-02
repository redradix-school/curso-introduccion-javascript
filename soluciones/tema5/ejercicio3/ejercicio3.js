$(function () {
  function ponEventos (linea) {
    var mensajes = ["primero", "segundo", "tercero"];
    var posicion = 0;
    var tamano = 30;

    var cabecera = $(linea).find("h4");

    $(linea).find(".dime-algo").click(function (e) {
      cabecera.html(mensajes[posicion]);
      posicion = posicion + 1;
      if (posicion >= mensajes.length) {
        posicion = 0;
      }
    });

    $(linea).find(".aumentar").click(function (e) {
      cabecera.css({"font-size": ++tamano + "px"});
    });

    $(linea).find(".reducir").click(function (e) {
      cabecera.css({"font-size": --tamano + "px"});
    });

    $(linea).find(".ocultar").click(function (e) {
      cabecera.css({display: "none"});
      $(linea).find(".mostrar").css({display: "block"});
      $(linea).find(".ocultar").css({display: "none"});
    });

    $(linea).find(".mostrar").click(function (e) {
      cabecera.css({display: "block"});
      $(linea).find(".mostrar").css({display: "none"});
      $(linea).find(".ocultar").css({display: "block"});
    });

  }

  var lineas = $(".linea");

  for (var i=0; i<lineas.length; i++) {
    ponEventos(lineas[i]);
  }
});
