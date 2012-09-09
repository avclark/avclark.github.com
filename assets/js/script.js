$(function() {

  if($!('body').hasClass("homepage")) {
    $('.home').hover(
      function() {
        $('.home span').fadeIn(200).css({display: "block"});
        // $('.home span').animate({
        //   opacity: 1
        // }, 200);
      }, 
      function() {
        $('.home span').fadeOut(200);
        // $('.home span').animate({
        //   opacity: 0
        // }, 200);
      }
    );
  }

  $.backstretch("/uploads/avc.jpg", {speed: 150});

});

// Functions
(function($){

  

})(jQuery);




