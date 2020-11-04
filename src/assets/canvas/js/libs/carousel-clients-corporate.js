jQuery(document).ready(function($) {

  var ocClients = $("#oc-clients");

  ocClients.owlCarousel({
    margin: 30,
    loop: true,
    nav: false,
    autoplay: true,
    dots: false,
    autoplayHoverPause: true,
    responsive:{
      0:{ items:2 },
      480:{ items:3 },
      768:{ items:4 },
      992:{ items:5 },
      1200:{ items:6 }
    }
  });

});
