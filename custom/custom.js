$(document).ready(function() {
  var monthNames = ["January", "February", "March", "April", "May", 
                   "June","July", "August", "September", "October", "November", 
                   "December"
                   ];

  var today = new Date();
  var d = today.getDate();
  var m = monthNames[today.getMonth()];
  var yyyy = today.getFullYear();

  today = m + ' ' + d + ', ' + yyyy;

  $('#date').text(today); 

  
  var colors = ['#9CF771', '#86E1FF', '#FD70AB'];

  var color = colors[Math.floor(Math.random() * colors.length)];
  var buttonElements = document.getElementsByClassName('btn-default');
  var ogButtonColor = window.getComputedStyle(buttonElements[0]).getPropertyValue('background-color');

  $('h2').css({
    'color': color, 
    'border-bottom-color': color
    });

  $('input').css({
    'color': color
    });

  $('li a').hover(
    function() {
      $(this).css({
        'color': color
      });
    },
    function() {
      $(this).css({
        'color': 'inherit'
      });
    }
  );

  $('.btn-default').hover(
    function() {
      $(this).css({
        'background-color': color,
        'border-color': color
      });
    },
    function() {
      $(this).css({
        'background-color': ogButtonColor,
        'border-color': ogButtonColor
      });
    }
  );

});
