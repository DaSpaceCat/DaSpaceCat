var winWidth;

$(document).ready(function() {
  function update() {
    winWidth = $(window).width();
    if (winWidth < 1000) {
      $('#mCSS').attr('href', 'mStyle.css');
    } else {
      $('#mCSS').attr('href', '');
    }
  }
  setInterval(update, 1000/60);
});