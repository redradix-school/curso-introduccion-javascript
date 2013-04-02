$(function() {

  var info = $("#info");
  var boton = $("#boton");
  var input = $("#input")

  info.hide();

  boton.mouseover(function (e) {
    info.html("Ratón sobre botón!");
    info.stop().slideDown();
  });
  boton.mouseleave(function (e) {
    info.html("El ratón ha salido del botón...");
    info.stop().slideUp();
  });

});
