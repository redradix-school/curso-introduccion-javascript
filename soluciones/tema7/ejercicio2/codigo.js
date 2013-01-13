$(function() {

  // diccionario de colores
  var diccionarioColores = {
    "Negro": "#000",
    "Rojo": "#F00",
    "Verde": "#0F0"
  };

  // elementos de la página
  var banner = $("#salida");
  var background = $("#panel");
  var botonMostrar = $("#alert");
  var botonBorrar = $("#borrar");
  var desplegableColor = $("#color");
  var inputMensaje = $("#mensaje");

  // borrar el input
  botonBorrar.click(function (e) {
    banner.html("");
    inputMensaje.val("");
  });

  // mostrar el mensaje y cambiar el color
  botonMostrar.click(function (e) {
    var color = desplegableColor.val();
    color = diccionarioColores[color];
    var texto = inputMensaje.val();
    if (texto.length > 0) {
      inputMensaje.val("");
      banner.html(texto);
      background.css({"background-color": color});
    }
  });

});
