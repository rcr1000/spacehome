$(document).ready(function() {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var today = new Date();
  var d = today.getDate();
  var m = monthNames[today.getMonth()];
  var yyyy = today.getFullYear();

  today = m + ' ' + d + ', ' + yyyy;

  $('#date').text(today);
});
