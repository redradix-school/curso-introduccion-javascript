$(function() {

  var botones = $(".mostrar");
  var contenidos = $(".panel");

  $(botones[0]).click(function (e) {
    $(contenidos[0]).hide('slow').fadeOut();
  });
});
