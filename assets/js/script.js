$(function() {

  $(function() {
    var $allVideos = $("iframe[src^='http://player.vimeo.com']"),
      $fluidEl = $(".wrap");

    $allVideos.each(function() {
      $(this)
        .data('aspectRatio', this.height / this.width)
        .removeAttr('height')
        .removeAttr('width');
    });

    $(window).resize(function() {
      var newWidth = $fluidEl.width();

      $allVideos.each(function() {
        var $el = $(this);
        $el
          .width(newWidth)
          .height(newWidth * $el.data('aspectRatio'));
      });
    }).resize();

  });

});

// Functions
(function($){

  

})(jQuery);




