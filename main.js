var maxX = $(window).width() - $(".touchMeNot").width();
var maxY = $(window).height() - $(".touchMeNot").height();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {
  $(".touchMeNot").mouseenter(function () {
    $(this).css({
      left: getRandomInt(0, maxX),
      top: getRandomInt(0, maxY)
    });
  });
});

/* original
$('.touchMeNot').on('mouseenter',function(e){
  var maxX = $(window).width() - $(this).width();
  var maxY = $(window).height() - $(this).height();    
  $(this).css({
      'left':getRandomInt(0, maxX),
      'top':getRandomInt(0, maxY)
  });
});
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
