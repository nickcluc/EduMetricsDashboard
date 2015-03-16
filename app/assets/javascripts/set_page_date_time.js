var month = { month: 'short'};
var day = { day: 'numeric'};
var weekday = { weekday: 'short'};
var timeOptions = { hour: 'numeric', minute: 'numeric' }
var time = new Date();

$(document).ready(function() {
  $("#page-time-date").html(
    time.toLocaleString('en-US', weekday) +
    " " + time.toLocaleString('en-US', month) +
    " " + time.toLocaleString('en-US', day)
  );
  $("#page-time-time").html(
    time.toLocaleString('en-US', timeOptions)
  );
});
