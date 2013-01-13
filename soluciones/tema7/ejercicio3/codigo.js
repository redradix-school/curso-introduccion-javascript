$(function() {

  // Expresiones regulares
  var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9] {1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var regexNoVacio = /\S+/;
  var regexNumerico = /^\d+$/;


  // Rlementos
  var inputs = $("input");
  var email = $(inputs[0]);
  var noVacio = $(inputs[1]);
  var numerico = $(inputs[2]);

  $(".button").click(function (e) {

    if (!email.val().match(regexEmail)) {
      email.parent().addClass("error");
    } else {
      email.parent().removeClass("error");
    }

    if (!noVacio.val().match(regexNoVacio)) {
      noVacio.parent().addClass("error");
    } else {
      noVacio.parent().removeClass("error");
    }

    if (!numerico.val().match(regexNumerico)) {
      numerico.parent().addClass("error");
    } else {
      numerico.parent().removeClass("error");
    }
  });

});
