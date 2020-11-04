jQuery(document).ready(function($) {

  var ocImages = $("#oc-images");

  ocImages.owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    nav: false,
    autoplay: false,
    dots: true,
    navRewind: false
  });

  $('#linked-to-gallery a').click(function() {
    var imageLink = $(this).attr('data-image');
    ocImages.trigger('to.owl.carousel', [Number(imageLink) - 1]);
    return false;
  });

});
