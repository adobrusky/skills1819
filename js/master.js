let pageScroll;
function navbarChange() {
  if(pageScroll > 0 || screenWidth < medium) {
    $('.nav, .nav-items').css('backgroundColor', '#353535');
  } else if(pageScroll === 0 && screenWidth > medium){
    $('.nav, .nav-items').css('backgroundColor', 'rgba(0, 0, 0, 0.3)');
    console.log(navbarHeight);
  }
  console.log(screenWidth);
}

$(document).ready(function() {
  navbarChange();
  $(window).scroll(function() {
    pageScroll = $(window).scrollTop();
    navbarChange();
  })
  $(window).resize(function() {
        navbarChange();
  })
});
