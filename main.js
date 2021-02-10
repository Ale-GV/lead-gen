jQuery(".touchMeNot").mouseenter(function () {
  var maxX = $(window).width() - $(this).width();
  var maxY = $(window).height() - $(this).height();
  jQuery(this).css({
    left: getRandomInt(0, maxX),
    top: getRandomInt(0, maxY)
  });
});
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
