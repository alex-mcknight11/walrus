$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    //$("#walrus-showing").fadeToggle();
    $("#walrus-hidden").toggle();
    //$("#walrus-hidden").fadeToggle();
    $('#showText').toggle();
    $('#hideText').toggle();
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $('#expandedText').toggle();
  });
});