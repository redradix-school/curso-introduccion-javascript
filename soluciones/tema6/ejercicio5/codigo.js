$(function() {

  // Cambia este valor (slow, fast, o el número de milisegundos)

  var velocidad = "slow";

  // No te preocupes por esto...

  function mostrarYOcultar (selector, entrar, salir) {
    $(selector + " .mostrar").click(function() {
      $(selector + " .panel")[entrar](velocidad);
    });

    $(selector + " .ocultar").click(function() {
      $(selector + " .panel")[salir](velocidad);
    });
  }

  mostrarYOcultar(".normal", "show", "hide");
  mostrarYOcultar(".fade", "fadeIn", "fadeOut");
  mostrarYOcultar(".slide", "slideDown", "slideUp");

});
