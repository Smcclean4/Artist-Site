$(document).ready(function() {
var div = $('#divToToggle');
var pos = div.position();

$(window).scroll(funciton() {
  var windowpos = $(window).scrollTop();
  console.log(pos.top)
  if (windowpos > pos.top && pos.top+500 > windowpos) {
    div.addClass('AfterScroll');
      div.removeClass("beforeScroll");
  } else {
    div.addClass('BeforeScroll');
    div.removeClass('AfterScroll');
  }
});
});
