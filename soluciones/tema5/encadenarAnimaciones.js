// Ejecuta este código con el HTML del ejercicio 5

$(function() {

  var botones = $(".mostrar");
  var contenidos = $(".panel");

  $(botones[0]).click(function (e) {
    $(contenidos[0]).hide('slow', function () {
      $(contenidos[1]).slideUp('fast', function () {
        $(contenidos[2]).fadeOut(400);
      })
    })
  });

});
