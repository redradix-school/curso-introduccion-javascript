$(function() {

  var botonEstado1 = "Ocúltate";
  var botonEstado2 = "Muéstrate";

  $(".boton > a").click(function (e) {
    var boton = $(e.currentTarget);
    var mensaje = boton.parent().parent().find("h3");

    boton.toggleClass("alert");
    if (boton.hasClass("alert")) {
      boton.html(botonEstado2);
    } else {
      boton.html(botonEstado1);
    }

    mensaje.fadeToggle();

    return false;
  });

});
