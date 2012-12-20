$(function() {

  var desplegables = $(".accordion li");
  var contenidos = $(".content");
  
  function ponEventosDesplegable (desplegable, contenido) {
    $(desplegable).click(function (e) {
      contenidos.stop().slideUp();
      $(contenido).stop().slideDown('normal', function () {
        desplegables.removeClass("active");
        $(desplegable).addClass("active");
      });
    });
  }
  
  for (var i=0; i<desplegables.length; i++) {
    ponEventosDesplegable(desplegables[i], contenidos[i]);
  }

});
