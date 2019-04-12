let pageScroll = $(window).scrollTop();
function navbarChange() {
  if(pageScroll > 0 || screenWidth < medium) {
    $('.nav, .nav-items').css('backgroundColor', '#353535');
  } else if(pageScroll === 0){
    $('.nav, .nav-items').css('backgroundColor', 'rgba(0, 0, 0, 0.3)');
    if(screenWidth > large) {
      $('.nav-items').css('backgroundColor', 'transparent');
    }
    console.log(navbarHeight);
  }
  console.log(screenWidth + ' ' + pageScroll);
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
