$(function () {
  $('#datetimepicker1').datetimepicker({
    inline: true,
    viewMode: 'days'
  });
});



$(document).ready(function() {
  $( "#cal-button" ).click(function() {
    $( ".toggle" ).toggle();
  });
});

function set(el,text){
  while (el.firstChild)el.removeChild(el.firstChild);
  el.html(document.createTextNode(text))}

$(document).ready(function() {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  function setupUpdater() {
    var input=$("#datetimepicker1"),
      orig=$("#date"),
      oldText=input.data('DateTimePicker').date()._d.toLocaleDateString('en-US',options),
      timeout=null;

    function handleChange() {
      var newText=input.data('DateTimePicker').date()._d.toLocaleDateString('en-US',options);
      if (newText==oldText) return;
      else oldText=newText;
      set(orig, newText);
    }

    function eventHandler(){
      if(timeout) clearTimeout(timeout);
      timeout=setTimeout(handleChange, 50);
    }
    $('.datepicker').on("click", eventHandler);
  }
  // implement Auto Update Time
  // function setupUpdaterTime() {
  //   var input=$("#timepicker"),
  //     orig=$("#time"),
  //     oldText=input.data().textContent,
  //     timeout=null;
  //
  //   function handleChange() {
  //     var newText=input.data().textContent;
  //     if (newText==oldText) return;
  //     else oldText=newText;
  //     set(orig, newText);
  //   }
  //
  //   function eventHandler(){
  //     if(timeout) clearTimeout(timeout);
  //     timeout=setTimeout(handleChange, 50);
  //   }
  //   $('.bfh-timepicker').on("change", eventHandler);
  // }
  setupUpdater();
  // setupUpdaterTime();
});
