$(function () {

  function ponEventos (linea) {
    var mensajes = ["uno", "dos", "tres"];
    var mensajeActual = 0;
    var cabecera = $(linea).find("h4");

    $(linea).find(".dime-algo").click(function() {
      $(cabecera).html(mensajes[mensajeActual]);
      mensajeActual = (mensajeActual + 1) % mensajes.length;
    });

    $(linea).find(".borrar").click(function() {
      $(cabecera).html("");
      mensajeActual = 0;
    });

    $(linea).find(".aumentar").click(function() {
      var size = parseInt($(cabecera).css("font-size"));
      $(cabecera).css({fontSize: (size + 1) + "px"});
    });
    $(linea).find(".reducir").click(function() {
      var size = parseInt($(cabecera).css("font-size"));
      $(cabecera).css({fontSize: (size - 1) + "px"});
    });

    $(linea).find(".ocultar").click(function() {
      $(cabecera).css({display: "none"});
      $(linea).find(".mostrar").css({display: "block"});
      $(linea).find(".ocultar").css({display: "none"});
    });
    $(linea).find(".ocultar").click(function() {
      $(cabecera).css({display: "block"});
      $(linea).find(".mostrar").css({display: "none"});
      $(linea).find(".ocultar").css({display: "block"});
    });
  }

  var lineas = $(".linea");

  for(var i=0; i<lineas.length; i++) {
    ponEventos(lineas[i]);
  }

});
