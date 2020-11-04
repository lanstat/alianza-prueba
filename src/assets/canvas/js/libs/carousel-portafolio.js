jQuery(document).ready(function($) {

  var ocClients = $("#oc-portfolio-sidebar");

  ocClients.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: false,
    autoplay: true,
    dots: true,
    autoplayHoverPause: true
  });

});
