jQuery(window).load(function(){

  var $container = $('#portfolio');

  $container.isotope({ transitionDuration: '0.65s' });

  $('#portfolio-filter a').click(function(){
    $('#portfolio-filter li').removeClass('activeFilter');
    $(this).parent('li').addClass('activeFilter');
    var selector = $(this).attr('data-filter');
    $container.isotope({ filter: selector });
    return false;
  });

  $('#portfolio-shuffle').click(function(){
    $container.isotope('updateSortData').isotope({
      sortBy: 'random'
    });
  });

  $(window).resize(function() {
    $container.isotope('layout');
  });

});
