$(document).ready(function() {

  var colorSchemes = [
    'electric-green.css',
    'hot-pink.css',
    'tron.css'
  ];

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

  // Pick a random color scheme
  var colorScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];

  // Remove the fallback colorscheme and apply the random one.
  $("LINK[href='css/yesdonuts_color_schemes/tron.css']").remove();
  $('<link />', {
    rel: 'stylesheet',
    type: 'text/css',
    href: 'css/yesdonuts_color_schemes/' + colorScheme
  }).appendTo('head');

});
