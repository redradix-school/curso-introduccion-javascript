$(function() {
  $("#boton").click(function (e) {
    $("#fondo, #modal").addClass("visible");
  });
  $("#modal > a, #fondo").click(function (e) {
    $("#fondo, #modal").removeClass("visible");
  })
});
