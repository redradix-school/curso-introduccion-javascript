$(function() {

  // Guardamos todas las tabs y todos los contendos
  var tabs = $(".tabs dd");
  var contenidos = $(".tabs-content li");

  // Vamos a llamar a esta función con cada pareja tab-contenido
  function activarTabOnClick(tab, contenido) {
    // primero, envolvemos los nodos con jQuery
    tab = $(tab);
    contenido = $(contenido);
    // cuando el usuario haga click en la pestaña...
    tab.click(function (e) {
      // quitamos la clase "active" de todas las tabs y todos los contenidos
      // y así nos aseguramos de que ocultarlos TODOS
      tabs.removeClass("active");
      contenidos.removeClass("active");
      // ahora añadimos "active" a esta pareja de tab-contenido
      // para activarlos solo a ellos
      tab.addClass("active");
      contenido.addClass("active");
    });
  }

  // Recorremos los arrays llamando a la funcion con cada elemento
  for (var i=0; i < tabs.length; i++) {
    activarTabOnClick(tabs[i], contenidos[i]);
  }

});
