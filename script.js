var winWidth;
var prevWinWidth;

$(document).ready(function() {
  for (let i = 10; i > 0; i--) {
    if (i == 8) {
      $("#blends").after('<image class="projectImage" src="https://raw.githubusercontent.com/DaSpaceCat/DaSpaceCat/main/assets/' + i + '.gif">');
    } else {
      $("#blends").after('<image class="projectImage" src="https://raw.githubusercontent.com/DaSpaceCat/DaSpaceCat/main/assets/' + i + '.png">');
    }
  }

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