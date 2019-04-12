let pageScroll;
function navbarChange() {
  if(pageScroll > navbarHeight && screenWidth > small) {
    $('.nav, .nav-items').css('backgroundColor', '#353535');
  } else {
    $('.nav, .nav-items').css('backgroundColor', 'rgba(0, 0, 0, 0.3)');
  }
}


$(document).ready(function() {
  navbarChange();

  $(window).scroll() {
    pageScroll = $(window).scrollTop();
    navbarChange();
  }
});
