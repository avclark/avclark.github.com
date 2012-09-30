$(function() {

  if(!$('body').hasClass("homepage")) {
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

  //$.backstretch("/uploads/avc.jpg", {speed: 150});

  $(function() {

    // Find all YouTube videos
    var $allVideos = $("iframe[src^='http://player.vimeo.com']"),

        // The element that is fluid width
        $fluidEl = $(".main");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {

      $(this)
        .data('aspectRatio', this.height / this.width)
        
        // and remove the hard coded width/height
        .removeAttr('height')
        .removeAttr('width');

    });

    // When the window is resized
    // (You'll probably want to debounce this)
    $(window).resize(function() {

      var newWidth = $fluidEl.width();
      
      // Resize all videos according to their own aspect ratio
      $allVideos.each(function() {

        var $el = $(this);
        $el
          .width(newWidth)
          .height(newWidth * $el.data('aspectRatio'));

      });

    // Kick off one resize to fix all videos on page load
    }).resize();

  });

});

// Functions
(function($){

  

})(jQuery);




