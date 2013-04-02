$(function() {

  var template = $("#template").html();
  
  function anadirTarea () {
    var tituloTarea = $("input").val();
    $("input").val("");
    
    var nodoTarea = $(template);
    nodoTarea.find(".tarea").html(tituloTarea);
    
    nodoTarea.find(".cerrar").click(function (e) {
      nodoTarea.slideUp('slow', function () {
        nodoTarea.remove();
      });
    });
    
    $("#lista").append(nodoTarea);
  }

  $("#anadir").click(anadirTarea);
  
  $("input").keypress(function (e) {
    if (e.keyCode == 13) {
      anadirTarea();
    }
  });

});
