jQuery(document).ready(function($) {

  var ocClients = $("#oc-clients-full");

  ocClients.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: false,
    autoplay: true,
    dots: false,
    autoplayHoverPause: true
  });

});
