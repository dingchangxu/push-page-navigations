// Needs latest version of jQuery to run

$(function(){
  $('body').removeClass('noscript');

  $('.toggle-btn, .close-btn').click(function(){
    toggleNav();
  });
});

function toggleNav(){
  if($('.site-wrapper').attr('data-state') == 'slide-closed'){
    //show nav when closed
    $('.site-wrapper').attr('data-state', 'slide-open');

  }else{
    //Hide nav when open
    $('.site-wrapper').attr('data-state', 'slide-closed');
  }
}