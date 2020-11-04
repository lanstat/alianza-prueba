jQuery(document).ready(function($) {

  var ocProduct = $("#oc-product");

  ocProduct.owlCarousel({
    margin: 30,
    nav: true,
    navText : ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
    autoplayHoverPause: true,
    dots: false,
    width: '250px',
    responsive:{
      0:{ items:1 },
      480:{ items:2 },
      768:{ items:3 },
      992:{ items:2 }
    }
  });

});
