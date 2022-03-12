var winWidth;
var prevWinWidth;

$(document).ready(function() {
  function update() {
    winWidth = $(window).width();
    if (prevWinWidth != winWidth) {
      if (winWidth < 1000) {
        $('#mCSS').attr('href', 'mStyle.css');
      } else {
        $('#mCSS').attr('href', '');
      }
    }
    prevWinWidth = winWidth;
  }
  setInterval(update, 1000/60);
});