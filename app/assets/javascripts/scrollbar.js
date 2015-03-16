var options = {
  sliderMaxHeight: 8,
  alwaysVisible: true
};

$(document).ready(function() {
  $(".nano").nanoScroller(options);
  $(".nano-pane").css("display","block");
  $(".slider").css("display","block");
});
