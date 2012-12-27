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

  var replaceERBTags = function() {  
    elements.each(function() {
      var $this = $(this),
          txt   = $this.html();
          console.log(txt);
      
      txt = txt.replace(new RegExp("&lt;%=(.+?)%&gt;", "g"), "{{$1}}");
      txt = txt.replace(new RegExp("&lt;%(.+?)%&gt;", "g"), "{%$1%}");
      
      $this.html(txt);
    });
  };

  replaceERBTags($('div.highlight').find('code.text'));
  replaceERBTags($('p code'));

});

// Functions
(function($){

  

})(jQuery);




