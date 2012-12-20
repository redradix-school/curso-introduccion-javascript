$(function() {

  $(".boton > a").click(function (e) {
    var boton = $(e.currentTarget);
    var mensaje = boton.parent().parent().find("h3");

    boton.toggleClass("alert");
    if (boton.hasClass("alert")) {
      boton.html("Muéstrate");
    } else {
      boton.html("Ocúltate");
    }

    mensaje.fadeToggle();
  });

});
