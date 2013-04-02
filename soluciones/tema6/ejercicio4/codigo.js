$(function() {
  
  // La foto que estoy viendo
  var posicion = 0;
  
  // Cuántas fotos hay
  
  var numeroFotos = $(".orbit img").length;
  
  // Los nodos que me interesan
  
  var botones = $("#botones a");
  var fotos = $("#featured");

  // Para viajar a la posición que quiero ver
  
  function moverAPosicion () {
    posicion = (posicion + numeroFotos) % numeroFotos;
    fotos.stop().animate({left: -100 * posicion + "%"});
  }

  // Botones [<] y [>] del visor
  
  $("#izquierda").click(function (e) {
    posicion = posicion - 1;
    moverAPosicion();
  });

  $("#derecha").click(function (e) {
    posicion = posicion + 1;
    moverAPosicion();
  });
  
  // Botones [ 1 | 2 | 3 ]
  
  function botonIrAFoto (boton, n) {
    $(boton).click(function () {
      posicion = n;
      moverAPosicion();
    })
  }

  for (var i=0; i<botones.length; i++) {
    botonIrAFoto(botones[i], i);
  }
  
  // Movimiento automático
  
  function autoPase () {
    setTimeout(function () {
      posicion++;
      moverAPosicion();
      autoPase();
    }, 2000);
  }
  
  autoPase();

});
