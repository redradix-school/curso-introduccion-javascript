$(function() {

  $("#alert").click(function (e) {
    var msg = $("#mensaje").val();
    alert(msg);
  });
  
  $("#borrar").click(function (e) {
    $("#mensaje").val("");
  });

});
