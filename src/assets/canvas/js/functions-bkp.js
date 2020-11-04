
var $ = jQuery.noConflict();
$.fn.inlineStyle = function (prop) {
  return this.prop("style")[$.camelCase(prop)];
};

$.fn.doOnce = function( func ) {
  this.length && func.apply( this );
  return this;
}

$.extend($.infinitescroll.prototype,{
  _setup_portfolioinfiniteitemsloader: function infscr_setup_portfolioinfiniteitemsloader() {
    var opts = this.options,
      instance = this;
    // Bind nextSelector link to retrieve
    $(opts.nextSelector).click(function(e) {
      if (e.which == 1 && !e.metaKey && !e.shiftKey) {
        e.preventDefault();
        instance.retrieve();
      }
    });
    // Define loadingStart to never hide pager
    instance.options.loading.start = function (opts) {
      opts.loading.msg
        .appendTo(opts.loading.selector)
        .show(opts.loading.speed, function () {
          instance.beginAjax(opts);
        });
    }
  },
  _showdonemsg_portfolioinfiniteitemsloader: function infscr_showdonemsg_portfolioinfiniteitemsloader () {
    var opts = this.options,
      instance = this;
    //Do all the usual stuff
    opts.loading.msg
      .find('img')
      .hide()
      .parent()
      .find('div').html(opts.loading.finishedMsg).animate({ opacity: 1 }, 2000, function () {
      $(this).parent().fadeOut('normal');
    });
    //And also hide the navSelector
    $(opts.navSelector).fadeOut('normal');
    // user provided callback when done
    opts.errorCallback.call($(opts.contentSelector)[0],'done');
  }
});

(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
      || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
}());



function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;
  return function() {
    context = this;
    args = arguments;
    timestamp = new Date();
    var later = function() {
      var last = (new Date()) - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    if (callNow) result = func.apply(context, args);
    return result;
  };
}


var requesting = false;

var killRequesting = debounce(function () {
  requesting = false;
}, 100);

function onScrollSliderParallax() {
  if (!requesting) {
    requesting = true;
    requestAnimationFrame(function(){
      SEMICOLON.slider.sliderParallax();
      SEMICOLON.slider.sliderElementsFade();
    });
  }
  killRequesting();
}

var SEMICOLON = SEMICOLON || {};

(function($){

  // USE STRICT
  "use strict";

  SEMICOLON.initialize = {

    init: function(){

      SEMICOLON.initialize.responsiveClasses();
      SEMICOLON.initialize.imagePreload( '.portfolio-item:not(:has(.fslider)) img' );
      SEMICOLON.initialize.stickyElements();
      SEMICOLON.initialize.goToTop();
      SEMICOLON.initialize.fullScreen();
      SEMICOLON.initialize.verticalMiddle();
      SEMICOLON.initialize.lightbox();
      SEMICOLON.initialize.resizeVideos();
      SEMICOLON.initialize.imageFade();
      SEMICOLON.initialize.pageTransition();
      SEMICOLON.initialize.dataStyles();
      SEMICOLON.initialize.dataResponsiveHeights();

      $('.fslider').addClass('preloader2');

    },

    responsiveClasses: function(){
      var jRes = jRespond([
        {
          label: 'smallest',
          enter: 0,
          exit: 479
        },{
          label: 'handheld',
          enter: 480,
          exit: 767
        },{
          label: 'tablet',
          enter: 768,
          exit: 991
        },{
          label: 'laptop',
          enter: 992,
          exit: 1199
        },{
          label: 'desktop',
          enter: 1200,
          exit: 10000
        }
      ]);
      jRes.addFunc([
        {
          breakpoint: 'desktop',
          enter: function() { $('body').addClass('device-lg'); },
          exit: function() { $('body').removeClass('device-lg'); }
        },{
          breakpoint: 'laptop',
          enter: function() { $('body').addClass('device-md'); },
          exit: function() { $('body').removeClass('device-md'); }
        },{
          breakpoint: 'tablet',
          enter: function() { $('body').addClass('device-sm'); },
          exit: function() { $('body').removeClass('device-sm'); }
        },{
          breakpoint: 'handheld',
          enter: function() { $('body').addClass('device-xs'); },
          exit: function() { $('body').removeClass('device-xs'); }
        },{
          breakpoint: 'smallest',
          enter: function() { $('body').addClass('device-xxs'); },
          exit: function() { $('body').removeClass('device-xxs'); }
        }
      ]);
    },

    imagePreload: function(selector, parameters){
      var params = {
        delay: 250,
        transition: 400,
        easing: 'linear'
      };
      $.extend(params, parameters);

      $(selector).each(function() {
        var image = $(this);
        image.css({visibility:'hidden', opacity: 0, display:'block'});
        image.wrap('<span class="preloader" />');
        image.one("load", function(evt) {
          $(this).delay(params.delay).css({visibility:'visible'}).animate({opacity: 1}, params.transition, params.easing, function() {
            $(this).unwrap('<span class="preloader" />');
          });
        }).each(function() {
          if(this.complete) $(this).trigger("load");
        });
      });
    },

    verticalMiddle: function(){
      if( $('.vertical-middle').length > 0 ) {
        $('.vertical-middle').each( function(){
          var element = $(this),
            verticalMiddleH = $(this).outerHeight(),
            headerHeight = $('#header').outerHeight();

          if( $(this).parents('#slider').length > 0 && !$(this).hasClass('ignore-header') ) {
            if( $('#header').hasClass('transparent-header') && ( $('body').hasClass('device-lg') || $('body').hasClass('device-md') ) ) {
              verticalMiddleH = verticalMiddleH - 70;
              if( $('#slider').next('#header').length > 0 ) { verticalMiddleH = verticalMiddleH + headerHeight; }
            }
          }

          if( $('body').hasClass('device-xs') || $('body').hasClass('device-xxs') ) {
            if( $(this).parents('.full-screen').length && !$(this).parents('.force-full-screen').length ){
              $(this).css({ position: 'relative', top: '0', width: 'auto', marginTop: '0', padding: '60px 0' }).addClass('clearfix');
            } else {
              $(this).css({ position: 'absolute', top: '50%', width: '100%', marginTop: -(verticalMiddleH/2)+'px' });
            }
          } else {
            $(this).css({ position: 'absolute', top: '50%', width: '100%', marginTop: -(verticalMiddleH/2)+'px' });
          }
        });
      }
    },

    stickyElements: function(){
      if( $('.si-sticky').length > 0 ) {
        var siStickyH = $('.si-sticky').outerHeight();
        $('.si-sticky').css({ marginTop: -(siStickyH/2)+'px' });
      }

      if( $('.dots-menu').length > 0 ) {
        var opmdStickyH = $('.dots-menu').outerHeight();
        $('.dots-menu').css({ marginTop: -(opmdStickyH/2)+'px' });
      }
    },

    goToTop: function(){
      $('#gotoTop').click(function() {
        $('body,html').stop(true).animate({scrollTop:0},400);
        return false;
      });
    },

    goToTopScroll: function(){
      if( $('body').hasClass('device-lg') || $('body').hasClass('device-md') || $('body').hasClass('device-sm') ) {
        if($(window).scrollTop() > 450) {
          $('#gotoTop').fadeIn();
        } else {
          $('#gotoTop').fadeOut();
        }
      }
    },

    fullScreen: function(){
      if( $('.full-screen').length > 0 ) {
        $('.full-screen').each( function(){
          var element = $(this),
            scrHeight = $(window).height();
          if( $(this).attr('id') == 'slider' ) {
            var sliderHeightOff = $('#slider').offset().top;
            scrHeight = scrHeight - sliderHeightOff;
            if( $(this).hasClass('slider-parallax') ) {
              var transformVal = $(this).css('transform'),
                transformX = transformVal.match(/-?[\d\.]+/g);
              if( !transformX ) { var transformXvalue = 0; } else { var transformXvalue = transformX[5]; }
              scrHeight = ( $(window).height() + Number( transformXvalue ) ) - sliderHeightOff;
            }
            if( $('#slider.with-header').next('#header:not(.transparent-header)').length > 0 && ( $('body').hasClass('device-lg') || $('body').hasClass('device-md') ) ) {
              var headerHeightOff = $('#header').outerHeight();
              scrHeight = scrHeight - headerHeightOff;
            }
          }
          if( $(this).parents('.full-screen').length > 0 ) { scrHeight = $(this).parents('.full-screen').height(); }

          if( $('body').hasClass('device-xs') || $('body').hasClass('device-xxs') ) {
            if( !$(this).hasClass('force-full-screen') ){ scrHeight = 'auto'; }
          }

          $(this).css('height', scrHeight);
          if( $(this).attr('id') == 'slider' && !$(this).hasClass('canvas-slider-grid') ) { if( $(this).has('.swiper-slide') ) { $(this).find('.swiper-slide').css('height', scrHeight); } }
        });
      }
    },

    maxHeight: function(){
      if( $('.common-height').length > 0 ) {
        $('.common-height').each( function(){
          var element = $(this);
          if( $(this).has('.common-height') ) {
            SEMICOLON.initialize.commonHeight( $(this).find('.common-height') );
          }

          SEMICOLON.initialize.commonHeight( $(this) );
        });
      }
    },

    commonHeight: function( element ){
      var maxHeight = 0;
      element.children('[class^=col-]').each(function() {
        var element = $(this).children('div');
        if( $(this).hasClass('max-height') ){
          maxHeight = $(this).outerHeight();
        } else {
          if ($(this).outerHeight() > maxHeight)
            maxHeight = $(this).outerHeight();
        }
      });

      $(this).children('[class^=col-]').each(function() {
        $(this).height(maxHeight);
      });
    },

    testimonialsGrid: function(){
      if( $('.testimonials-grid').length > 0 ) {
        if( $('body').hasClass('device-sm') || $('body').hasClass('device-md') || $('body').hasClass('device-lg') ) {
          var maxHeight = 0;
          $('.testimonials-grid').each( function(){
            $(this).find("li > .testimonial").each(function(){
              if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
            });
            $(this).find("li").height(maxHeight);
            maxHeight = 0;
          });
        } else {
          $('.testimonials-grid').find("li").css({ 'height': 'auto' });
        }
      }
    },

    lightbox: function(){
      var $lightboxImageEl = $('[data-lightbox="image"]'),
        $lightboxGalleryEl = $('[data-lightbox="gallery"]'),
        $lightboxIframeEl = $('[data-lightbox="iframe"]'),
        $lightboxAjaxEl = $('[data-lightbox="ajax"]'),
        $lightboxAjaxGalleryEl = $('[data-lightbox="ajax-gallery"]');

      if( $('[data-lightbox="image"]').length > 0 ) {
        $('[data-lightbox="image"]').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: 'mfp-no-margins mfp-fade', // class to remove default margin from left and right side
          image: {
            verticalFit: true
          }
        });
      }

      if( $('[data-lightbox="gallery"]').length > 0 ) {
        $('[data-lightbox="gallery"]').each(function() {
          var element = $(this);

          if( $(this).find('a[data-lightbox="gallery-item"]').parent('.clone').hasClass('clone') ) {
            $(this).find('a[data-lightbox="gallery-item"]').parent('.clone').find('a[data-lightbox="gallery-item"]').attr('data-lightbox','');
          }

          $(this).magnificPopup({
            delegate: 'a[data-lightbox="gallery-item"]',
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-fade', // class to remove default margin from left and right side
            image: {
              verticalFit: true
            },
            gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            }
          });
        });
      }

      if( $('[data-lightbox="iframe"]').length > 0 ) {
        $('[data-lightbox="iframe"]').magnificPopup({
          disableOn: 600,
          type: 'iframe',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      }

      if( $('[data-lightbox="ajax"]').length > 0 ) {
        $('[data-lightbox="ajax"]').magnificPopup({
          type: 'ajax',
          closeBtnInside: false,
          callbacks: {
            ajaxContentAdded: function(mfpResponse) {
              SEMICOLON.widget.loadFlexSlider();
              SEMICOLON.initialize.resizeVideos();
              SEMICOLON.widget.masonryThumbs();
            },
            open: function() {
              $('body').addClass('ohidden');
            },
            close: function() {
              $('body').removeClass('ohidden');
            }
          }
        });
      }

      if( $('[data-lightbox="ajax-gallery"]').length > 0 ) {
        $('[data-lightbox="ajax-gallery"]').magnificPopup({
          delegate: 'a[data-lightbox="ajax-gallery-item"]',
          type: 'ajax',
          closeBtnInside: false,
          gallery: {
            enabled: true,
            preload: 0,
            navigateByImgClick: false
          },
          callbacks: {
            ajaxContentAdded: function(mfpResponse) {
              SEMICOLON.widget.loadFlexSlider();
              SEMICOLON.initialize.resizeVideos();
              SEMICOLON.widget.masonryThumbs();
            },
            open: function() {
              $('body').addClass('ohidden');
            },
            close: function() {
              $('body').removeClass('ohidden');
            }
          }
        });
      }
    },

    resizeVideos: function(){
      if ( $().fitVids ) {
        $("#content,#footer,#slider:not(.revslider-wrap),.landing-offer-media,.portfolio-ajax-modal").fitVids({
          customSelector: "iframe[src^='http://www.dailymotion.com/embed']",
          ignore: '.no-fv'
        });
      }
    },

    imageFade: function(){
      $('.image_fade').hover( function(){
        $(this).filter(':not(:animated)').animate({opacity: 0.8}, 400);
      }, function() {
        $(this).animate({opacity: 1}, 400);
      });
    },

    blogTimelineEntries: function(){
      $('.post-timeline.grid-2').find('.entry').each( function(){
        var position = $(this).inlineStyle('left');
        if( position == '0px' ) {
          $(this).removeClass('alt');
        } else {
          $(this).addClass('alt');
        }
        $(this).find('.entry-timeline').fadeIn();
      });
    },

    pageTransition: function(){
      if( !$('body').hasClass('no-transition') ){
        var animationIn = $('body').attr('data-animation-in'),
          animationOut = $('body').attr('data-animation-out'),
          durationIn = $('body').attr('data-speed-in'),
          durationOut = $('body').attr('data-speed-out'),
          loaderStyle = $('body').attr('data-loader'),
          loaderColor = $('body').attr('data-loader-color'),
          loaderStyleHtml = '<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>',
          loaderBgStyle = '',
          loaderBorderStyle = '',
          loaderBgClass = '',
          loaderBorderClass = '',
          loaderBgClass2 = '',
          loaderBorderClass2 = '';

        if( !$('body').attr('data-animation-in') ) { animationIn = 'fadeIn'; }
        if( !$('body').attr('data-animation-out') ) { animationOut = 'fadeOut'; }
        if( !$('body').attr('data-speed-in') ) { durationIn = 1500; }
        if( !$('body').attr('data-speed-out') ) { durationOut = 800; }

        if( $('body').attr('data-loader-color') ) {
          if( $('body').attr('data-loader-color') == 'theme' ) {
            loaderBgClass = ' bgcolor';
            loaderBorderClass = ' border-color';
            loaderBgClass2 = ' class="bgcolor"';
            loaderBorderClass2 = ' class="border-color"';
          } else {
            loaderBgStyle = ' style="background-color:'+ $('body').attr('data-loader-color') +';"';
            loaderBorderStyle = ' style="border-color:'+ $('body').attr('data-loader-color') +';"';
          }
          loaderStyleHtml = '<div class="css3-spinner-bounce1'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-bounce2'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-bounce3'+ loaderBgClass +'"'+ loaderBgStyle +'></div>'
        }

        if( $('body').attr('data-loader') == '2' ) {
          loaderStyleHtml = '<div class="css3-spinner-flipper'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
        } else if( $('body').attr('data-loader') == '3' ) {
          loaderStyleHtml = '<div class="css3-spinner-double-bounce1'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-double-bounce2'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
        } else if( $('body').attr('data-loader') == '4' ) {
          loaderStyleHtml = '<div class="css3-spinner-rect1'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-rect2'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-rect3'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-rect4'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-rect5'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
        } else if( $('body').attr('data-loader') == '5' ) {
          loaderStyleHtml = '<div class="css3-spinner-cube1'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-cube2'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
        } else if( $('body').attr('data-loader') == '6' ) {
          loaderStyleHtml = '<div class="css3-spinner-scaler'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
        } else if( $('body').attr('data-loader') == '7' ) {
          loaderStyleHtml = '<div class="css3-spinner-grid-pulse"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
        } else if( $('body').attr('data-loader') == '8' ) {
          loaderStyleHtml = '<div class="css3-spinner-clip-rotate"><div'+ loaderBorderClass2 + loaderBorderStyle +'></div></div>';
        } else if( $('body').attr('data-loader') == '9' ) {
          loaderStyleHtml = '<div class="css3-spinner-ball-rotate"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
        } else if( $('body').attr('data-loader') == '10' ) {
          loaderStyleHtml = '<div class="css3-spinner-zig-zag"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
        } else if( $('body').attr('data-loader') == '11' ) {
          loaderStyleHtml = '<div class="css3-spinner-triangle-path"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
        } else if( $('body').attr('data-loader') == '12' ) {
          loaderStyleHtml = '<div class="css3-spinner-ball-scale-multiple"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
        } else if( $('body').attr('data-loader') == '13' ) {
          loaderStyleHtml = '<div class="css3-spinner-ball-pulse-sync"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
        } else if( $('body').attr('data-loader') == '14' ) {
          loaderStyleHtml = '<div class="css3-spinner-scale-ripple"><div'+ loaderBorderClass2 + loaderBorderStyle +'></div><div'+ loaderBorderClass2 + loaderBorderStyle +'></div><div'+ loaderBorderClass2 + loaderBorderStyle +'></div></div>';
        }

        $('#wrapper').animsition({
          inClass : animationIn,
          outClass : animationOut,
          inDuration : Number(durationIn),
          outDuration : Number(durationOut),
          linkElement : '#primary-menu ul li a:not([target="_blank"]):not([href^=#])',
          loading : true,
          loadingParentElement : 'body',
          loadingClass : 'css3-spinner',
          loadingHtml : loaderStyleHtml,
          unSupportCss : [
            'animation-duration',
            '-webkit-animation-duration',
            '-o-animation-duration'
          ],
          overlay : false,
          overlayClass : 'animsition-overlay-slide',
          overlayParentElement : 'body'
        });
      }
    },

    topScrollOffset: function() {
      var topOffsetScroll = 0;

      if( ( $('body').hasClass('device-lg') || $('body').hasClass('device-md') ) && !SEMICOLON.isMobile.any() ) {
        if( $('#header').hasClass('sticky-header') ) {
          if( $('#page-menu').hasClass('dots-menu') ) { topOffsetScroll = 100; } else { topOffsetScroll = 144; }
        } else {
          if( $('#page-menu').hasClass('dots-menu') ) { topOffsetScroll = 140; } else { topOffsetScroll = 184; }
        }

        if( !$('#page-menu').length ) {
          if( $('#header').hasClass('sticky-header') ) { topOffsetScroll = 100; } else { topOffsetScroll = 140; }
        }
      } else {
        topOffsetScroll = 40;
      }

      return topOffsetScroll;
    },

    defineColumns: function( element ){
      var column = 4;

      if( element.hasClass('portfolio-full') ) {
        if( element.hasClass('portfolio-3') ) column = 3;
        else if( element.hasClass('portfolio-5') ) column = 5;
        else if( element.hasClass('portfolio-6') ) column = 6;
        else column = 4;

        if( $('body').hasClass('device-sm') && ( column == 4 || column == 5 || column == 6 ) ) {
          column = 3;
        } else if( $('body').hasClass('device-xs') && ( column == 3 || column == 4 || column == 5 || column == 6 ) ) {
          column = 2;
        } else if( $('body').hasClass('device-xxs') ) {
          column = 1;
        }
      } else if( element.hasClass('masonry-thumbs') ) {

        var lgCol = element.attr('data-lg-col'),
          mdCol = element.attr('data-md-col'),
          smCol = element.attr('data-sm-col'),
          xsCol = element.attr('data-xs-col'),
          xxsCol = element.attr('data-xxs-col');

        if( element.hasClass('col-2') ) column = 2;
        else if( element.hasClass('col-3') ) column = 3;
        else if( element.hasClass('col-5') ) column = 5;
        else if( element.hasClass('col-6') ) column = 6;
        else column = 4;

        if( $('body').hasClass('device-lg') ) {
          if( element.attr('data-lg-col') ) { column = Number(element.attr('data-lg-col')); }
        } else if( $('body').hasClass('device-md') ) {
          if( element.attr('data-md-col') ) { column = Number(element.attr('data-md-col')); }
        } else if( $('body').hasClass('device-sm') ) {
          if( element.attr('data-sm-col') ) { column = Number(element.attr('data-sm-col')); }
        } else if( $('body').hasClass('device-xs') ) {
          if( element.attr('data-xs-col') ) { column = Number(element.attr('data-xs-col')); }
        } else if( $('body').hasClass('device-xxs') ) {
          if( element.attr('data-xxs-col') ) { column = Number(element.attr('data-xxs-col')); }
        }

      }

      return column;
    },

    setFullColumnWidth: function( element ){

      if( element.hasClass('portfolio-full') ) {
        var columns = SEMICOLON.initialize.defineColumns( element );
        var containerWidth = element.width();
        if( containerWidth == ( Math.floor(containerWidth/columns) * columns ) ) { containerWidth = containerWidth - 1; }
        var postWidth = Math.floor(containerWidth/columns);
        if( $('body').hasClass('device-xxs') ) { var deviceSmallest = 1; } else { var deviceSmallest = 0; }
        element.find(".portfolio-item").each(function(index){
          if( deviceSmallest == 0 && $(this).hasClass('wide') ) { var elementSize = ( postWidth*2 ); } else { var elementSize = postWidth; }
          $(this).css({"width":elementSize+"px"});
        });
      } else if( element.hasClass('masonry-thumbs') ) {
        var columns = SEMICOLON.initialize.defineColumns( element ),
          containerWidth = element.innerWidth(),
          windowWidth = $(window).width();
        if( containerWidth == windowWidth ){
          containerWidth = windowWidth*1.004;
          element.css({ 'width': containerWidth+'px' });
        }
        var postWidth = (containerWidth/columns);

        postWidth = Math.floor(postWidth);

        if( ( postWidth * columns ) >= containerWidth ) { element.css({ 'margin-right': '-1px' }); }

        element.children('a').css({"width":postWidth+"px"});

        var firstElementWidth = element.find('a:eq(0)').outerWidth();

        element.isotope({
          masonry: {
            columnWidth: firstElementWidth
          }
        });

        var bigImageNumbers = element.attr('data-big');
        if( element.attr('data-big') ) {
          bigImageNumbers = element.attr('data-big').split(",");
          var bigImageNumber = '',
            bigi = '';
          for( bigi = 0; bigi < element.attr('data-big').length; bigi++ ){
            bigImageNumber = Number(element.attr('data-big')[bigi]) - 1;
            element.find('a:eq('+bigImageNumber+')').css({ width: firstElementWidth*2 + 'px' });
          }
          var t = setTimeout( function(){
            element.isotope('layout');
          }, 1000 );
        }
      }

    },

    aspectResizer: function(){
      var $aspectResizerEl = $('.aspect-resizer');
      if( $('.aspect-resizer').length > 0 ) {
        $('.aspect-resizer').each( function(){
          var element = $(this),
            elementW = $(this).inlineStyle('width'),
            elementH = $(this).inlineStyle('height'),
            elementPW = $(this).parent().innerWidth();
        });
      }
    },

    dataStyles: function(){
      var $dataStyleXxs = $('[data-style-xxs]'),
        $dataStyleXs = $('[data-style-xs]'),
        $dataStyleSm = $('[data-style-sm]'),
        $dataStyleMd = $('[data-style-md]'),
        $dataStyleLg = $('[data-style-lg]');

      if( $('[data-style-xxs]').length > 0 ) {
        $('[data-style-xxs]').each( function(){
          var element = $(this),
            elementStyle = $(this).attr('data-style-xxs');

          if( $('body').hasClass('device-xxs') ) {
            if( $(this).attr('data-style-xxs') != '' ) { $(this).attr( 'style', $(this).attr('data-style-xxs') ); }
          }
        });
      }

      if( $('[data-style-xs]').length > 0 ) {
        $('[data-style-xs]').each( function(){
          var element = $(this),
            elementStyle = $(this).attr('data-style-xs');

          if( $('body').hasClass('device-xs') ) {
            if( $(this).attr('data-style-xxs') != '' ) { $(this).attr( 'style', $(this).attr('data-style-xxs') ); }
          }
        });
      }

      if( $('[data-style-sm]').length > 0 ) {
        $('[data-style-sm]').each( function(){
          var element = $(this),
            elementStyle = $(this).attr('data-style-sm');

          if( $('body').hasClass('device-sm') ) {
            if( $(this).attr('data-style-xxs') != '' ) { $(this).attr( 'style', $(this).attr('data-style-xxs') ); }
          }
        });
      }

      if( $('[data-style-md]').length > 0 ) {
        $('[data-style-md]').each( function(){
          var element = $(this),
            elementStyle = $(this).attr('data-style-md');

          if( $('body').hasClass('device-md') ) {
            if( $(this).attr('data-style-md') != '' ) { $(this).attr( 'style', $(this).attr('data-style-md') ); }
          }
        });
      }

      if( $('[data-style-lg]').length > 0 ) {
        $('[data-style-lg]').each( function(){
          var element = $(this),
            elementStyle = $(this).attr('data-style-lg');

          if( $('body').hasClass('device-lg') ) {
            if( $(this).attr('data-style-lg') != '' ) { $(this).attr( 'style', $(this).attr('data-style-lg') ); }
          }
        });
      }
    },

    dataResponsiveHeights: function(){
      var $dataHeightXxs = $('[data-height-xxs]'),
        $dataHeightXs = $('[data-height-xs]'),
        $dataHeightSm = $('[data-height-sm]'),
        $dataHeightMd = $('[data-height-md]'),
        $dataHeightLg = $('[data-height-lg]');

      if( $('[data-height-xxs]').length > 0 ) {
        $('[data-height-xxs]').each( function(){
          var element = $(this),
            elementHeight = $(this).attr('data-height-xxs');

          if( $('body').hasClass('device-xxs') ) {
            if( $(this).attr('data-height-xxs') != '' ) { $(this).css( 'height', $(this).attr('data-height-xxs') ); }
          }
        });
      }

      if( $('[data-height-xs]').length > 0 ) {
        $('[data-height-xs]').each( function(){
          var element = $(this),
            elementHeight = $(this).attr('data-height-xs');

          if( $('body').hasClass('device-xs') ) {
            if( $(this).attr('data-height-xxs') != '' ) { $(this).css( 'height', $(this).attr('data-height-xxs') ); }
          }
        });
      }

      if( $('[data-height-sm]').length > 0 ) {
        $('[data-height-sm]').each( function(){
          var element = $(this),
            elementHeight = $(this).attr('data-height-sm');

          if( $('body').hasClass('device-sm') ) {
            if( $(this).attr('data-height-xxs') != '' ) { $(this).css( 'height', $(this).attr('data-height-xxs') ); }
          }
        });
      }

      if( $('[data-height-md]').length > 0 ) {
        $('[data-height-md]').each( function(){
          var element = $(this),
            elementHeight = $(this).attr('data-height-md');

          if( $('body').hasClass('device-md') ) {
            if( $(this).attr('data-height-xxs') != '' ) { $(this).css( 'height', $(this).attr('data-height-xxs') ); }
          }
        });
      }

      if( $('[data-height-lg]').length > 0 ) {
        $('[data-height-lg]').each( function(){
          var element = $(this),
            elementHeight = $(this).attr('data-height-lg');

          if( $('body').hasClass('device-lg') ) {
            if( $(this).attr('data-height-xxs') != '' ) { $(this).css( 'height', $(this).attr('data-height-xxs') ); }
          }
        });
      }
    },

    stickFooterOnSmall: function(){
      var windowH = $(window).height(),
        wrapperH = $('#wrapper').height();

      if( $('#footer').length > 0 && $('#wrapper').has('#footer') ) {
        if( $(window).height() > $('#wrapper').height() ) {
          $('#footer').css({ 'margin-top': ( $(window).height() - $('#wrapper').height() ) });
        }
      }
    }

  };

  SEMICOLON.header = {

    init: function(){

      SEMICOLON.header.superfish();
      SEMICOLON.header.menufunctions();
      SEMICOLON.header.fullWidthMenu();
      SEMICOLON.header.overlayMenu();
      SEMICOLON.header.stickyMenu();
      SEMICOLON.header.sideHeader();
      SEMICOLON.header.sidePanel();
      SEMICOLON.header.onePageScroll();
      SEMICOLON.header.onepageScroller();
      SEMICOLON.header.darkLogo();
      SEMICOLON.header.topsearch();
      SEMICOLON.header.topcart();

    },

    superfish: function(){

      if ( $().superfish ) {
        if( $('body').hasClass('device-lg') || $('body').hasClass('device-md') ) {
          $('#primary-menu ul ul, #primary-menu ul .mega-menu-content').css('display', 'block');
          SEMICOLON.header.menuInvert();
        }

        $('body:not(.side-header) #primary-menu > ul, body:not(.side-header) #primary-menu > div > ul,.top-links > ul').superfish({
          popUpSelector: 'ul,.mega-menu-content,.top-link-section',
          delay: 250,
          speed: 350,
          animation: {opacity:'show'},
          animationOut:  {opacity:'hide'},
          cssArrows: false
        });

        $('body.side-header #primary-menu > ul').superfish({
          popUpSelector: 'ul',
          delay: 250,
          speed: 350,
          animation: {opacity:'show',height:'show'},
          animationOut:  {opacity:'hide',height:'hide'},
          cssArrows: false
        });
      }

    },

    menuInvert: function() {

      $('#primary-menu .mega-menu-content, #primary-menu ul ul').each( function( index, element ){
        var $menuChildElement = $(element);
        var windowWidth = $(window).width();
        var menuChildOffset = $(element).offset();
        var menuChildWidth = $(element).width();
        var menuChildLeft = $(element).offset().left;

        if($(window).width() - ($(element).width() + $(element).offset().left) < 0) {
          $(element).addClass('menu-pos-invert');
        }
      });

    },

    menufunctions: function(){

      $( '#primary-menu ul li:has(ul)' ).addClass('sub-menu');
      $( '.top-links ul li:has(ul) > a' ).append( ' <i class="icon-angle-down"></i>' );
      $( '.top-links > ul' ).addClass( 'clearfix' );

      if( $('body').hasClass('device-lg') || $('body').hasClass('device-md') ) {
        $('#primary-menu.sub-title > ul > li').hover(function() {
          $(this).prev().css({ backgroundImage : 'none' });
        }, function() {
          $(this).prev().css({ backgroundImage : 'url("/assets/canvas/images/icons/menu-divider.png")' });
        });

        $('#primary-menu.sub-title').children('ul').children('.current').prev().css({ backgroundImage : 'none' });
      }

      if( SEMICOLON.isMobile.Android() ) {
        $( '#primary-menu ul li.sub-menu' ).children('a').on('touchstart', function(e){
          if( !$(this).parent('li.sub-menu').hasClass('sfHover') ) {
            e.preventDefault();
          }
        });
      }

      if( SEMICOLON.isMobile.Windows() ) {
        $('#primary-menu > ul, #primary-menu > div > ul,.top-links > ul').superfish('destroy').addClass('windows-mobile-menu');

        $( '#primary-menu ul li:has(ul)' ).append('<a href="#" class="wn-submenu-trigger"><i class="icon-angle-down"></i></a>');

        $( '#primary-menu ul li.sub-menu' ).children('a.wn-submenu-trigger').click( function(e){
          $(this).parent().toggleClass('open');
          $(this).parent().find('> ul, > .mega-menu-content').stop(true,true).toggle();
          return false;
        });
      }

    },

    fullWidthMenu: function(){
      if( $('body').hasClass('stretched') ) {
        if( $('#header').find('.container-fullwidth').length > 0 ) { $('.mega-menu .mega-menu-content').css({ 'width': $('#wrapper').width() - 120 }); }
        if( $('#header').hasClass('full-header') ) { $('.mega-menu .mega-menu-content').css({ 'width': $('#wrapper').width() - 60 }); }
      } else {
        if( $('#header').find('.container-fullwidth').length > 0 ) { $('.mega-menu .mega-menu-content').css({ 'width': $('#wrapper').width() - 120 }); }
        if( $('#header').hasClass('full-header') ) { $('.mega-menu .mega-menu-content').css({ 'width': $('#wrapper').width() - 80 }); }
      }
    },

    overlayMenu: function(){
      if( $('body').hasClass('overlay-menu') ) {
        var overlayMenuItem = $('#primary-menu').children('ul').children('li'),
          overlayMenuItemHeight = $('#primary-menu').children('ul').children('li').outerHeight(),
          overlayMenuItemTHeight = $('#primary-menu').children('ul').children('li').length * $('#primary-menu').children('ul').children('li').outerHeight(),
          firstItemOffset = ( $(window).height() - $('#primary-menu').children('ul').children('li').length * $('#primary-menu').children('ul').children('li').outerHeight() ) / 2;

        $('#primary-menu').children('ul').children('li:first-child').css({ 'margin-top': ( $(window).height() - $('#primary-menu').children('ul').children('li').length * $('#primary-menu').children('ul').children('li').outerHeight() ) / 2+'px' });
      }
    },

    stickyMenu: function( headerOffset ){
      if ($(window).scrollTop() > headerOffset) {
        if( $('body').hasClass('device-lg') || $('body').hasClass('device-md') ) {
          $('body:not(.side-header) #header:not(.no-sticky)').addClass('sticky-header');
          $('#page-menu:not(.dots-menu,.no-sticky)').addClass('sticky-page-menu');
          if( !$('#header-wrap').hasClass('force-not-dark') ) { $('#header-wrap').removeClass('not-dark'); }
          SEMICOLON.header.stickyMenuClass();
        } else if( $('body').hasClass('device-xs') || $('body').hasClass('device-xxs') || $('body').hasClass('device-sm') ) {
          if( $('body').hasClass('sticky-responsive-menu') ) {
            $('#header:not(.no-sticky)').addClass('responsive-sticky-header');
            SEMICOLON.header.stickyMenuClass();
          }
        }
      } else {
        SEMICOLON.header.removeStickyness();
      }
    },

    removeStickyness: function(){
      if( $('#header').hasClass('sticky-header') ){
        $('body:not(.side-header) #header:not(.no-sticky)').removeClass('sticky-header');
        $('#header').removeClass().addClass($('#header').attr('class'));
        $('#header-wrap').removeClass().addClass($('#header-wrap').attr('class'));
        if( !$('#header-wrap').hasClass('force-not-dark') ) { $('#header-wrap').removeClass('not-dark'); }
        SEMICOLON.slider.swiperSliderMenu();
        SEMICOLON.slider.revolutionSliderMenu();
      }
      if( $('#page-menu').hasClass('sticky-page-menu') ){
        $('#page-menu:not(.dots-menu,.no-sticky)').removeClass('sticky-page-menu');
      }
      if( $('#header').hasClass('responsive-sticky-header') ){
        $('body.sticky-responsive-menu #header').removeClass('responsive-sticky-header');
      }
      if( ( $('body').hasClass('device-xs') || $('body').hasClass('device-xxs') || $('body').hasClass('device-sm') ) && ( typeof $('#header').attr('data-responsive-class') === 'undefined' ) ) {
        $('#header').removeClass().addClass($('#header').attr('class'));
        $('#header-wrap').removeClass().addClass($('#header-wrap').attr('class'));
        if( !$('#header-wrap').hasClass('force-not-dark') ) { $('#header-wrap').removeClass('not-dark'); }
      }
    },

    sideHeader: function(){
      $("#header-trigger").click(function(){
        $('body.open-header').toggleClass("side-header-open");
        return false;
      });
    },

    sidePanel: function(){
      $(".side-panel-trigger").click(function(){
        $('body').toggleClass("side-panel-open");
        if( $('body').hasClass('device-touch') ) {
          $('body').toggleClass("ohidden");
        }
        return false;
      });
    },

    onePageScroll: function(){
      if( $('.one-page-menu').length > 0 ){
        var onePageSpeed = $('.one-page-menu').attr('data-speed'),
          onePageOffset = $('.one-page-menu').attr('data-offset'),
          onePageEasing = $('.one-page-menu').attr('data-easing');

        if( !$('.one-page-menu').attr('data-speed') ) { onePageSpeed = 1000; }
        if( !$('.one-page-menu').attr('data-easing') ) { onePageEasing = 'easeOutQuad'; }

        $('.one-page-menu').find('a[data-href]').click(function(){
          var element = $(this),
            divScrollToAnchor = $(this).attr('data-href'),
            divScrollSpeed = $(this).attr('data-speed'),
            divScrollOffset = $(this).attr('data-offset'),
            divScrollEasing = $(this).attr('data-easing');

          if( $( $(this).attr('data-href') ).length > 0 ) {

            if( !$('.one-page-menu').attr('data-offset') ) {
              var onePageOffsetG = SEMICOLON.initialize.topScrollOffset();
            } else {
              var onePageOffsetG = $('.one-page-menu').attr('data-offset');
            }

            if( !$(this).attr('data-speed') ) { divScrollSpeed = onePageSpeed; }
            if( !$(this).attr('data-offset') ) { divScrollOffset = onePageOffsetG; }
            if( !$(this).attr('data-easing') ) { divScrollEasing = onePageEasing; }

            if( $('.one-page-menu').hasClass('no-offset') ) { divScrollOffset = 0; }

            onePageGlobalOffset = Number(divScrollOffset);

            $('.one-page-menu').find('li').removeClass('current');
            $('.one-page-menu').find('a[data-href="' + $(this).attr('data-href') + '"]').parent('li').addClass('current');

            $('#primary-menu > ul, #primary-menu > .container > ul').toggleClass('show', function() {
              $('html,body').stop(true).animate({
                'scrollTop': $( $(this).attr('data-href') ).offset().top - Number(divScrollOffset)
              }, Number(divScrollSpeed), divScrollEasing);
            }, false);

            onePageGlobalOffset = Number(divScrollOffset);
          }

          return false;
        });
      }
    },

    onepageScroller: function(){
      $('.one-page-menu').find('li').removeClass('current');
      $('.one-page-menu').find('a[data-href="#' + SEMICOLON.header.onePageCurrentSection() + '"]').parent('li').addClass('current');
    },

    onePageCurrentSection: function(){
      var currentOnePageSection = 'home';

      $('.page-section').each(function(index) {
        var h = $(this).offset().top;
        var y = $(window).scrollTop();

        var offsetScroll = 100 + onePageGlobalOffset;

        if( y + offsetScroll >= h && y < h + $(this).height() && $(this).attr('id') != currentOnePageSection ) {
          currentOnePageSection = $(this).attr('id');
        }
      });

      return currentOnePageSection;
    },

    darkLogo: function(){
      if( ( $('#header').hasClass('dark') || $('body').hasClass('dark') ) && !$('#header-wrap').hasClass('not-dark') ) {
        if( $('#logo').find('.standard-logo').attr('data-dark-logo') ){ $('#logo').find('.standard-logo').find('img').attr('src', $('#logo').find('.standard-logo').attr('data-dark-logo')); }
        if( $('#logo').find('.retina-logo').attr('data-dark-logo') ){ $('#logo').find('.retina-logo').find('img').attr('src', $('#logo').find('.retina-logo').attr('data-dark-logo')); }
      } else {
        if( $('#logo').find('.standard-logo').find('img').attr('src') ){ $('#logo').find('.standard-logo').find('img').attr('src', $('#logo').find('.standard-logo').find('img').attr('src')); }
        if( $('#logo').find('.retina-logo').find('img').attr('src') ){ $('#logo').find('.retina-logo').find('img').attr('src', $('#logo').find('.retina-logo').find('img').attr('src')); }
      }
    },

    stickyMenuClass: function(){
      if( $('#header').attr('data-sticky-class') ) { var newClassesArray = $('#header').attr('data-sticky-class').split(/ +/); } else { var newClassesArray = ''; }
      var noOfNewClasses = newClassesArray.length;

      if( noOfNewClasses > 0 ) {
        var i = 0;
        for( i=0; i<noOfNewClasses; i++ ) {
          if( newClassesArray[i] == 'not-dark' ) {
            $('#header').removeClass('dark');
            $('#header-wrap').addClass('not-dark');
          } else if( newClassesArray[i] == 'dark' ) {
            $('#header-wrap').removeClass('not-dark force-not-dark');
            if( !$('#header').hasClass( newClassesArray[i] ) ) {
              $('#header').addClass( newClassesArray[i] );
            }
          } else if( !$('#header').hasClass( newClassesArray[i] ) ) {
            $('#header').addClass( newClassesArray[i] );
          }
        }
      }
    },

    responsiveMenuClass: function(){
      if( $('body').hasClass('device-xs') || $('body').hasClass('device-xxs') || $('body').hasClass('device-sm') ){
        if( $('#header').attr('data-responsive-class') ) { var newClassesArray = $('#header').attr('data-responsive-class').split(/ +/); } else { var newClassesArray = ''; }
        var noOfNewClasses = newClassesArray.length;

        if( noOfNewClasses > 0 ) {
          var i = 0;
          for( i=0; i<noOfNewClasses; i++ ) {
            if( newClassesArray[i] == 'not-dark' ) {
              $('#header').removeClass('dark');
              $('#header-wrap').addClass('not-dark');
            } else if( newClassesArray[i] == 'dark' ) {
              $('#header-wrap').removeClass('not-dark force-not-dark');
              if( !$('#header').hasClass( newClassesArray[i] ) ) {
                $('#header').addClass( newClassesArray[i] );
              }
            } else if( !$('#header').hasClass( newClassesArray[i] ) ) {
              $('#header').addClass( newClassesArray[i] );
            }
          }
        }
        SEMICOLON.header.darkLogo();
      }
    },

    topsocial: function(){
      if( $('#top-social').find('li').length > 0 ){
        if( $('body').hasClass('device-md') || $('body').hasClass('device-lg') ) {
          $('#top-social').find('li').show();
          $('#top-social').find('li').find('a').css({width: 40});

          $('#top-social').find('li').find('.ts-text').each( function(){
            var $clone = $(this).clone().css({'visibility': 'hidden', 'display': 'inline-block', 'font-size': '13px', 'font-weight':'bold'}).appendTo($('body')),
              cloneWidth = $(this).clone().css({'visibility': 'hidden', 'display': 'inline-block', 'font-size': '13px', 'font-weight':'bold'}).appendTo($('body')).innerWidth() + 52;
            $(this).parent('a').attr('data-hover-width',$(this).clone().css({'visibility': 'hidden', 'display': 'inline-block', 'font-size': '13px', 'font-weight':'bold'}).appendTo($('body')).innerWidth() + 52);
            $(this).clone().css({'visibility': 'hidden', 'display': 'inline-block', 'font-size': '13px', 'font-weight':'bold'}).appendTo($('body')).remove();
          });

          $('#top-social').find('li').find('a').hover(function() {
            if( $(this).find('.ts-text').length > 0 ) {
              $(this).css({width: $(this).attr('data-hover-width')});
            }
          }, function() {
            $(this).css({width: 40});
          });
        } else {
          $('#top-social').find('li').show();
          $('#top-social').find('li').find('a').css({width: 40});

          $('#top-social').find('li').find('a').each(function() {
            var topIconTitle = $(this).find('.ts-text').text();
            $(this).attr('title', topIconTitle);
          });

          $('#top-social').find('li').find('a').hover(function() {
            $(this).css({width: 40});
          }, function() {
            $(this).css({width: 40});
          });

          if( $('body').hasClass('device-xxs') ) {
            $('#top-social').find('li').hide();
            $('#top-social').find('li').slice(0, 8).show();
          }
        }
      }
    },

    topsearch: function(){

      $(document).on('click', function(event) {
        if (!$(event.target).closest('#top-search').length) { $('body').toggleClass('top-search-open', false); }
        if (!$(event.target).closest('#top-cart').length) { $('#top-cart').toggleClass('top-cart-open', false); }
        if (!$(event.target).closest('#page-menu').length) { $('#page-menu').toggleClass('pagemenu-active', false); }
        if (!$(event.target).closest('#side-panel').length) { $('body').toggleClass('side-panel-open', false); }
      });

      $("#top-search-trigger").click(function(e){
        $('body').toggleClass('top-search-open');
        $('#top-cart').toggleClass('top-cart-open', false);
        $( '#primary-menu > ul, #primary-menu > div > ul' ).toggleClass("show", false);
        $('#page-menu').toggleClass('pagemenu-active', false);
        if ($('body').hasClass('top-search-open')){
          $('#top-search').find('input').focus();
        }
        e.stopPropagation();
        e.preventDefault();
      });

    },

    topcart: function(){

      $("#top-cart-trigger").click(function(e){
        $('#page-menu').toggleClass('pagemenu-active', false);
        $('#top-cart').toggleClass('top-cart-open');
        e.stopPropagation();
        e.preventDefault();
      });

    }

  };

  SEMICOLON.slider = {

    init: function() {

      SEMICOLON.slider.sliderParallax();
      SEMICOLON.slider.sliderElementsFade();
      SEMICOLON.slider.captionPosition();

    },

    sliderParallaxOffset: function(){
      var sliderParallaxOffsetTop = 0;
      var headerHeight = $('#header').outerHeight();
      if( $('body').hasClass('side-header') || $('#header').hasClass('transparent-header') ) { headerHeight = 0; }
      if( $('#page-title').length > 0 ) {
        var pageTitleHeight = $('#page-title').outerHeight();
        sliderParallaxOffsetTop = pageTitleHeight + headerHeight;
      } else {
        sliderParallaxOffsetTop = headerHeight;
      }

      if( $('#slider').next('#header').length > 0 ) { sliderParallaxOffsetTop = 0; }

      return sliderParallaxOffsetTop;
    },

    sliderParallax: function(){
      if( $('.slider-parallax').length > 0 ) {
        if( ( $('body').hasClass('device-lg') || $('body').hasClass('device-md') ) && !SEMICOLON.isMobile.any() ) {
          var parallaxOffsetTop = SEMICOLON.slider.sliderParallaxOffset(),
            parallaxElHeight = $('.slider-parallax').outerHeight();

          if( ( parallaxElHeight + parallaxOffsetTop + 50 ) > $(window).scrollTop() ){
            $('.slider-parallax').find('.slider-inner').css({ 'display': 'block', 'visibility': 'visible' });
            if ($(window).scrollTop() > parallaxOffsetTop) {
              var tranformAmount = (($(window).scrollTop()-parallaxOffsetTop) / 1.5 ).toFixed(2);
              var tranformAmount2 = (($(window).scrollTop()-parallaxOffsetTop) / 7 ).toFixed(2);
              $('.slider-parallax').stop(true,true).transition({ y: tranformAmount },0);
              $('.slider-parallax .slider-caption,.ei-title').stop(true,true).transition({ y: -tranformAmount2 },0);
            } else {
              $('.slider-parallax,.slider-parallax .slider-caption,.ei-title').transition({ y: 0 },0);
            }
          } else {
            $('.slider-parallax').find('.slider-inner').css({ 'display': 'none', 'visibility': 'hidden' });
          }
          if (requesting) {
            requestAnimationFrame(function(){
              SEMICOLON.slider.sliderParallax();
              SEMICOLON.slider.sliderElementsFade();
            });
          }
        } else {
          $('.slider-parallax,.slider-parallax .slider-caption,.ei-title').transition({ y: 0 },0);
        }
      }
    },

    sliderElementsFade: function(){
      if( $('.slider-parallax').length > 0 ) {
        if( ( $('body').hasClass('device-lg') || $('body').hasClass('device-md') ) && !SEMICOLON.isMobile.any() ) {
          var parallaxOffsetTop = SEMICOLON.slider.sliderParallaxOffset();
          if( $('#slider').length > 0 ) {
            if( $('#header').hasClass('transparent-header') || $('body').hasClass('side-header') ) { var tHeaderOffset = 100; } else { var tHeaderOffset = 0; }
            $('.slider-parallax').find('#slider-arrow-left,#slider-arrow-right,.vertical-middle:not(.no-fade),.slider-caption,.ei-title,.camera_prev,.camera_next').css({'opacity':( ( 100 + ( $('#slider').offset().top + parallaxOffsetTop + tHeaderOffset ) - $(window).scrollTop() ) ) /90});
          }
        } else {
          $('.slider-parallax').find('#slider-arrow-left,#slider-arrow-right,.vertical-middle:not(.no-fade),.slider-caption,.ei-title,.camera_prev,.camera_next').css({'opacity': 1});
        }
      }
    },

    captionPosition: function(){
      $('#slider').find('.slider-caption').each(function(){
        var scapHeight = $(this).outerHeight();
        var scapSliderHeight = $('#slider').outerHeight();
        if( $(this).parents('#slider').prev('#header').hasClass('transparent-header') && ( $('body').hasClass('device-lg') || $('body').hasClass('device-md') ) ) {
          if( $(this).parents('#slider').prev('#header').hasClass('floating-header') ) {
            $(this).css({ top: ( scapSliderHeight + 160 - scapHeight ) / 2 + 'px' });
          } else {
            $(this).css({ top: ( scapSliderHeight + 100 - scapHeight ) / 2 + 'px' });
          }
        } else {
          $(this).css({ top: ( scapSliderHeight - scapHeight ) / 2 + 'px' });
        }
      });
    },

    swiperSliderMenu: function(){
      if( $('body').hasClass('device-lg') || $('body').hasClass('device-md') ) {
        var activeSlide = $('#slider').find('.swiper-slide.swiper-slide-visible');
        SEMICOLON.slider.headerSchemeChanger(activeSlide);
      }
    },

    revolutionSliderMenu: function(){
      if( $('body').hasClass('device-lg') || $('body').hasClass('device-md') ) {
        var activeSlide = $('#slider').find('.current-sr-slide-visible');
        SEMICOLON.slider.headerSchemeChanger(activeSlide);
      }
    },

    headerSchemeChanger: function( activeSlide ){
      if( activeSlide.length > 0 ) {
        if( activeSlide.hasClass('dark') ){
          $('#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)').addClass('dark');
          $('#header.transparent-header.sticky-header,#header.transparent-header.semi-transparent.sticky-header,#header.transparent-header.floating-header.sticky-header').removeClass('dark');
          $('#header-wrap').removeClass('not-dark');
        } else {
          if( $('body').hasClass('dark') ) {
            activeSlide.addClass('not-dark');
            $('#header.transparent-header:not(.semi-transparent,.floating-header)').removeClass('dark');
            $('#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)').find('#header-wrap').addClass('not-dark');
          } else {
            $('#header.transparent-header:not(.semi-transparent,.floating-header)').removeClass('dark');
            $('#header-wrap').removeClass('not-dark');
          }
        }
        SEMICOLON.header.darkLogo();
      }
    },

    owlCaptionInit: function(){
      if( $('.owl-carousel').length > 0 ){
        $('.owl-carousel').each( function(){
          var element = $(this);
          if( $(this).find('.owl-dot').length > 0 ) {
            $(this).find('.owl-controls').addClass('with-carousel-dots');
          }
        });
      }
    }

  };

  SEMICOLON.portfolio = {

    init: function(){

      SEMICOLON.portfolio.ajaxload();

    },

    portfolioDescMargin: function(){
      var $portfolioOverlayEl = $('.portfolio-overlay');
      if( $('.portfolio-overlay').length > 0 ){
        $('.portfolio-overlay').each(function() {
          var element = $(this);
          if( element.find('.portfolio-desc').length > 0 ) {
            var portfolioOverlayHeight = element.outerHeight();
            var portfolioOverlayDescHeight = element.find('.portfolio-desc').outerHeight();
            if( element.find('a.left-icon').length > 0 || element.find('a.right-icon').length > 0 || element.find('a.center-icon').length > 0 ) {
              var portfolioOverlayIconHeight = 40 + 20;
            } else {
              var portfolioOverlayIconHeight = 0;
            }
            var portfolioOverlayMiddleAlign = ( portfolioOverlayHeight - portfolioOverlayDescHeight - portfolioOverlayIconHeight ) / 2
            element.find('.portfolio-desc').css({ 'margin-top': portfolioOverlayMiddleAlign });
          }
        });
      }
    },

    arrange: function(){
      SEMICOLON.initialize.setFullColumnWidth( $('#portfolio') );
      $('#portfolio.portfolio-full').isotope('layout');
    },

    ajaxload: function(){
      $('.portfolio-ajax .portfolio-item a.center-icon').click( function(e) {
        var portPostId = $(this).parents('.portfolio-item').attr('id');
        if( !$(this).parents('.portfolio-item').hasClass('portfolio-active') ) {
          SEMICOLON.portfolio.loadItem(portPostId, prevPostPortId);
        }
        e.preventDefault();
      });
    },

    newNextPrev: function( portPostId ){
      var portNext = SEMICOLON.portfolio.getNextItem(portPostId);
      var portPrev = SEMICOLON.portfolio.getPrevItem(portPostId);
      $('#next-portfolio').attr('data-id', portNext);
      $('#prev-portfolio').attr('data-id', portPrev);
    },

    loadItem: function( portPostId, prevPostPortId, getIt ){
      if(!getIt) { getIt = false; }
      var portNext = SEMICOLON.portfolio.getNextItem(portPostId);
      var portPrev = SEMICOLON.portfolio.getPrevItem(portPostId);
      if(getIt == false) {
        SEMICOLON.portfolio.closeItem();
        $('#portfolio-ajax-loader').fadeIn();
        var portfolioDataLoader = $('#' + portPostId).attr('data-loader');
        $('#portfolio-ajax-container').load(portfolioDataLoader, { portid: portPostId, portnext: portNext, portprev: portPrev },
          function(){
            SEMICOLON.portfolio.initializeAjax(portPostId);
            SEMICOLON.portfolio.openItem();
            $('.portfolio-ajax').find('.portfolio-item').removeClass('portfolio-active');
            $('#' + portPostId).addClass('portfolio-active');
          });
      }
    },

    closeItem: function(){
      if( $('#portfolio-ajax-wrap') && $('#portfolio-ajax-wrap').height() > 32 ) {
        $('#portfolio-ajax-loader').fadeIn();
        $('#portfolio-ajax-wrap').find('#portfolio-ajax-single').fadeOut('600', function(){
          $(this).remove();
        });
        $('#portfolio-ajax-wrap').removeClass('portfolio-ajax-opened');
      }
    },

    openItem: function(){
      var noOfImages = $('#portfolio-ajax-wrap').find('img').length;
      var noLoaded = 0;

      if( noOfImages > 0 ) {
        $('#portfolio-ajax-wrap').find('img').on('load', function(){
          noLoaded++;
          var topOffsetScroll = SEMICOLON.initialize.topScrollOffset();
          if(noOfImages === noLoaded) {
            $('#portfolio-ajax-container').css({ 'display': 'block' });
            $('#portfolio-ajax-wrap').addClass('portfolio-ajax-opened');
            $('#portfolio-ajax-loader').fadeOut();
            var t=setTimeout(function(){
              SEMICOLON.widget.loadFlexSlider();
              SEMICOLON.initialize.lightbox();
              SEMICOLON.initialize.resizeVideos();
              SEMICOLON.widget.masonryThumbs();
              $('html,body').stop(true).animate({
                'scrollTop': $('#portfolio-ajax-wrap').offset().top - topOffsetScroll
              }, 900, 'easeOutQuad');
            },500);
          }
        });
      } else {
        var topOffsetScroll = SEMICOLON.initialize.topScrollOffset();
        $('#portfolio-ajax-container').css({ 'display': 'block' });
        $('#portfolio-ajax-wrap').addClass('portfolio-ajax-opened');
        $('#portfolio-ajax-loader').fadeOut();
        var t=setTimeout(function(){
          SEMICOLON.widget.loadFlexSlider();
          SEMICOLON.initialize.lightbox();
          SEMICOLON.initialize.resizeVideos();
          SEMICOLON.widget.masonryThumbs();
          $('html,body').stop(true).animate({
            'scrollTop': $('#portfolio-ajax-wrap').offset().top - topOffsetScroll
          }, 900, 'easeOutQuad');
        },500);
      }
    },

    getNextItem: function( portPostId ){
      var portNext = '';
      var hasNext = $('#' + portPostId).next();
      if(hasNext.length != 0) {
        portNext = hasNext.attr('id');
      }
      return portNext;
    },

    getPrevItem: function( portPostId ){
      var portPrev = '';
      var hasPrev = $('#' + portPostId).prev();
      if(hasPrev.length != 0) {
        portPrev = hasPrev.attr('id');
      }
      return portPrev;
    },

    initializeAjax: function( portPostId ){
      prevPostPortId = $('#' + portPostId);

      $('#next-portfolio, #prev-portfolio').click( function() {
        var portPostId = $(this).attr('data-id');
        $('.portfolio-ajax').find('.portfolio-item').removeClass('portfolio-active');
        $('#' + portPostId).addClass('portfolio-active');
        SEMICOLON.portfolio.loadItem(portPostId,prevPostPortId);
        return false;
      });

      $('#close-portfolio').click( function() {
        $('#portfolio-ajax-container').fadeOut('600', function(){
          $('#portfolio-ajax-wrap').find('#portfolio-ajax-single').remove();
        });
        $('#portfolio-ajax-wrap').removeClass('portfolio-ajax-opened');
        $('.portfolio-ajax').find('.portfolio-item').removeClass('portfolio-active');
        return false;
      });
    }

  };

  SEMICOLON.widget = {

    init: function(){

      SEMICOLON.widget.animations();
      SEMICOLON.widget.youtubeBgVideo();
      SEMICOLON.widget.tabs();
      SEMICOLON.widget.tabsJustify();
      SEMICOLON.widget.toggles();
      SEMICOLON.widget.accordions();
      SEMICOLON.widget.counter();
      SEMICOLON.widget.roundedSkill();
      SEMICOLON.widget.progress();
      SEMICOLON.widget.twitterFeed();
      SEMICOLON.widget.flickrFeed();
      SEMICOLON.widget.instagramPhotos( '36286274.b9e559e.4824cbc1d0c94c23827dc4a2267a9f6b', 'b9e559ec7c284375bf41e9a9fb72ae01' );
      SEMICOLON.widget.dribbbleShots();
      SEMICOLON.widget.navTree();
      SEMICOLON.widget.textRotater();
      SEMICOLON.widget.linkScroll();
      SEMICOLON.widget.extras();

    },

    parallax: function(){
      if( !SEMICOLON.isMobile.any() ){
        $.stellar({
          horizontalScrolling: false,
          verticalOffset: 150
        });
      } else {
        $('.parallax').addClass('mobile-parallax');
        $('.page-title-parallax').addClass('mobile-parallax');
      }
    },

    animations: function(){
      var $dataAnimateEl = $('[data-animate]');
      if( $('[data-animate]').length > 0 ){
        if( $('body').hasClass('device-lg') || $('body').hasClass('device-md') || $('body').hasClass('device-sm') ){
          $('[data-animate]').each(function(){
            var element = $(this),
              animationDelay = $(this).attr('data-delay'),
              animationDelayTime = 0;

            if( animationDelay ) { animationDelayTime = Number( animationDelay ) + 500; } else { animationDelayTime = 500; }

            if( !$(this).hasClass('animated') ) {
              $(this).addClass('not-animated');
              var elementAnimation = $(this).attr('data-animate');
              $(this).appear(function () {
                setTimeout(function() {
                  $(this).removeClass('not-animated').addClass( elementAnimation + ' animated');
                }, animationDelayTime);
              },{accX: 0, accY: -120},'easeInCubic');
            }
          });
        }
      }
    },

    loadFlexSlider: function(){
      var $flexSliderEl = $('.fslider:not(.customjs)').find('.flexslider');
      if( $('.fslider:not(.customjs)').find('.flexslider').length > 0 ){
        $('.fslider:not(.customjs)').find('.flexslider').each(function() {
          var $flexsSlider = $(this),
            flexsAnimation = $(this).parent('.fslider').attr('data-animation'),
            flexsEasing = $(this).parent('.fslider').attr('data-easing'),
            flexsDirection = $(this).parent('.fslider').attr('data-direction'),
            flexsSlideshow = $(this).parent('.fslider').attr('data-slideshow'),
            flexsPause = $(this).parent('.fslider').attr('data-pause'),
            flexsSpeed = $(this).parent('.fslider').attr('data-speed'),
            flexsVideo = $(this).parent('.fslider').attr('data-video'),
            flexsPagi = $(this).parent('.fslider').attr('data-pagi'),
            flexsArrows = $(this).parent('.fslider').attr('data-arrows'),
            flexsThumbs = $(this).parent('.fslider').attr('data-thumbs'),
            flexsHover = $(this).parent('.fslider').attr('data-hover'),
            flexsSheight = true,
            flexsUseCSS = false;

          if( !flexsAnimation ) { flexsAnimation = 'slide'; }
          if( !flexsEasing || flexsEasing == 'swing' ) {
            flexsEasing = 'swing';
            flexsUseCSS = true;
          }
          if( !flexsDirection ) { flexsDirection = 'horizontal'; }
          if( !flexsSlideshow ) { flexsSlideshow = true; } else { flexsSlideshow = false; }
          if( !flexsPause ) { flexsPause = 5000; }
          if( !flexsSpeed ) { flexsSpeed = 600; }
          if( !flexsVideo ) { flexsVideo = false; }
          if( flexsDirection == 'vertical' ) { flexsSheight = false; }
          if( flexsPagi == 'false' ) { flexsPagi = false; } else { flexsPagi = true; }
          if( flexsThumbs == 'true' ) { flexsPagi = 'thumbnails'; } else { flexsPagi = flexsPagi; }
          if( flexsArrows == 'false' ) { flexsArrows = false; } else { flexsArrows = true; }
          if( flexsHover == 'false' ) { flexsHover = false; } else { flexsHover = true; }

          $(this).flexslider({
            selector: ".slider-wrap > .slide",
            animation: flexsAnimation,
            easing: flexsEasing,
            direction: flexsDirection,
            slideshow: flexsSlideshow,
            slideshowSpeed: Number(flexsPause),
            animationSpeed: Number(flexsSpeed),
            pauseOnHover: flexsHover,
            video: flexsVideo,
            controlNav: flexsPagi,
            directionNav: flexsArrows,
            smoothHeight: flexsSheight,
            useCSS: flexsUseCSS,
            start: function(slider){
              SEMICOLON.widget.animations();
              SEMICOLON.initialize.verticalMiddle();
              slider.parent().removeClass('preloader2');
              var t = setTimeout( function(){ $('#portfolio.portfolio-masonry,#portfolio.portfolio-full,#posts.post-masonry').isotope('layout'); }, 1200 );
              SEMICOLON.initialize.lightbox();
              $('.flex-prev').html('<i class="icon-angle-left"></i>');
              $('.flex-next').html('<i class="icon-angle-right"></i>');
              SEMICOLON.portfolio.portfolioDescMargin();
            },
            after: function(){
              if( $('#portfolio').has('portfolio-full') ) {
                $('#portfolio.portfolio-full').isotope('layout');
                SEMICOLON.portfolio.portfolioDescMargin();
              }
            }
          });
        });
      }
    },

    html5Video: function(){
      var videoEl = $('.video-wrap:has(video)');
      if( videoEl.length > 0 ) {
        videoEl.each(function(){
          var element = $(this),
            elementVideo = $(this).find('video'),
            outerContainerWidth = $(this).outerWidth(),
            outerContainerHeight = $(this).outerHeight(),
            innerVideoWidth = elementVideo.outerWidth(),
            innerVideoHeight = elementVideo.outerHeight();

          if( innerVideoHeight < outerContainerHeight ) {
            var videoAspectRatio = innerVideoWidth/innerVideoHeight,
              newVideoWidth = outerContainerHeight * videoAspectRatio,
              innerVideoPosition = (newVideoWidth - outerContainerWidth) / 2;
            elementVideo.css({ 'width': newVideoWidth+'px', 'height': outerContainerHeight+'px', 'left': -innerVideoPosition+'px' });
          } else {
            var innerVideoPosition = (innerVideoHeight - outerContainerHeight) / 2;
            elementVideo.css({ 'width': innerVideoWidth+'px', 'height': innerVideoHeight+'px', 'top': -innerVideoPosition+'px' });
          }

          if( SEMICOLON.isMobile.any() ) {
            var placeholderImg = elementVideo.attr('poster');

            if( placeholderImg != '' ) {
              $(this).append('<div class="video-placeholder" style="background-image: url('+ placeholderImg +');"></div>')
            }
          }
        });
      }
    },

    youtubeBgVideo: function(){
      if( $('.yt-bg-player').length > 0 ){
        $('.yt-bg-player').each( function(){
          var element = $(this),
            ytbgVideo = $(this).attr('data-video'),
            ytbgMute = $(this).attr('data-mute'),
            ytbgRatio = $(this).attr('data-ratio'),
            ytbgQuality = $(this).attr('data-quality'),
            ytbgOpacity = $(this).attr('data-opacity'),
            ytbgContainer = $(this).attr('data-container'),
            ytbgOptimize = $(this).attr('data-optimize'),
            ytbgLoop = $(this).attr('data-loop'),
            ytbgVolume = $(this).attr('data-volume'),
            ytbgStart = $(this).attr('data-start'),
            ytbgStop = $(this).attr('data-stop'),
            ytbgAutoPlay = $(this).attr('data-autoplay'),
            ytbgFullScreen = $(this).attr('data-fullscreen');

          if( ytbgMute == 'false' ) { ytbgMute = false; } else { ytbgMute = true; }
          if( !ytbgRatio ) { ytbgRatio = '16/9'; }
          if( !ytbgQuality ) { ytbgQuality = 'hd720'; }
          if( !ytbgOpacity ) { ytbgOpacity = 1; }
          if( !ytbgContainer ) { ytbgContainer = 'self'; }
          if( ytbgOptimize == 'false' ) { ytbgOptimize = false; } else { ytbgOptimize = true; }
          if( ytbgLoop == 'false' ) { ytbgLoop = false; } else { ytbgLoop = true; }
          if( !ytbgVolume ) { ytbgVolume = 1; }
          if( !ytbgStart ) { ytbgStart = 0; }
          if( !ytbgStop ) { ytbgStop = 0; }
          if( ytbgAutoPlay == 'false' ) { ytbgAutoPlay = false; } else { ytbgAutoPlay = true; }
          if( ytbgFullScreen == 'true' ) { ytbgFullScreen = true; } else { ytbgFullScreen = false; }

          $(this).mb_YTPlayer({
            videoURL: ytbgVideo,
            mute: ytbgMute,
            ratio: ytbgRatio,
            quality: ytbgQuality,
            opacity: ytbgOpacity,
            containment: ytbgContainer,
            optimizeDisplay: ytbgOptimize,
            loop: ytbgLoop,
            vol: ytbgVolume,
            startAt: ytbgStart,
            stopAt: ytbgStop,
            autoplay: ytbgAutoPlay,
            realfullscreen: ytbgFullScreen,
            showYTLogo: false,
            showControls: false
          });
        });
      }
    },

    tabs: function(){
      var $tabs = $('.tabs:not(.customjs)');
      if( $('.tabs:not(.customjs)').length > 0 ) {
        $('.tabs:not(.customjs)').each( function(){
          var element = $(this),
            elementSpeed = $(this).attr('data-speed'),
            tabActive = $(this).attr('data-active');

          if( !elementSpeed ) { elementSpeed = 400; }
          if( !tabActive ) { tabActive = 0; } else { tabActive = tabActive - 1; }

          $(this).tabs({
            active: Number(tabActive),
            show: {
              effect: "fade",
              duration: Number(elementSpeed)
            }
          });
        });
      }
    },

    tabsJustify: function(){
      if( !$('body').hasClass('device-xxs') && !$('body').hasClass('device-xs') ){
        var $tabsJustify = $('.tabs.tabs-justify');
        if( $('.tabs.tabs-justify').length > 0 ) {
          $('.tabs.tabs-justify').each( function(){
            var element = $(this),
              elementTabs = $(this).find('.tab-nav > li'),
              elementTabsNo = elementTabs.length,
              elementContainer = 0,
              elementWidth = 0;

            if( $(this).hasClass('tabs-bordered') || $(this).hasClass('tabs-bb') ) {
              elementContainer = $(this).find('.tab-nav').outerWidth();
            } else {
              if( $(this).find('tab-nav').hasClass('tab-nav2') ) {
                elementContainer = $(this).find('.tab-nav').outerWidth() - (elementTabsNo * 10);
              } else {
                elementContainer = $(this).find('.tab-nav').outerWidth() - 30;
              }
            }

            elementWidth = Math.floor(elementContainer/elementTabsNo);
            elementTabs.css({ 'width': elementWidth + 'px' });

          });
        }
      } else { $('.tabs.tabs-justify').find('.tab-nav > li').css({ 'width': 'auto' }); }
    },

    toggles: function(){
      var $toggle = $('.toggle');
      if( $toggle.length > 0 ) {
        $toggle.each( function(){
          var element = $(this),
            elementState = $(this).attr('data-state');

          if( elementState != 'open' ){
            $(this).find('.togglec').hide();
          } else {
            $(this).find('.togglet').addClass("toggleta");
          }

          $(this).find('.togglet').click(function(){
            $(this).toggleClass('toggleta').next('.togglec').slideToggle(300);
            return true;
          });
        });
      }
    },

    accordions: function(){
      var $accordionEl = $('.accordion');
      if( $accordionEl.length > 0 ){
        $accordionEl.each( function(){
          var element = $(this),
            elementState = $(this).attr('data-state'),
            accordionActive = $(this).attr('data-active');

          if( !accordionActive ) { accordionActive = 0; } else { accordionActive = accordionActive - 1; }

          $(this).find('.acc_content').hide();

          if( elementState != 'closed' ) {
            $(this).find('.acctitle:eq('+ Number(accordionActive) +')').addClass('acctitlec').next().show();
          }

          $(this).find('.acctitle').click(function(){
            if( $(this).next().is(':hidden') ) {
              $(this).find('.acctitle').removeClass('acctitlec').next().slideUp("normal");
              $(this).toggleClass('acctitlec').next().slideDown("normal");
            }
            return false;
          });
        });
      }
    },

    counter: function(){
      var $counterEl = $('.counter:not(.counter-instant)');
      if( $counterEl.length > 0 ){
        $counterEl.each(function(){
          var element = $(this);
          var counterElementComma = $(this).find('span').attr('data-comma');
          if( !counterElementComma ) { counterElementComma = false; } else { counterElementComma = true; }
          if( $('body').hasClass('device-lg') || $('body').hasClass('device-md') ){
            $(this).appear( function(){
              SEMICOLON.widget.runCounter( $(this), counterElementComma );
            },{accX: 0, accY: -120},'easeInCubic');
          } else {
            SEMICOLON.widget.runCounter( $(this), counterElementComma );
          }
        });
      }
    },

    runCounter: function( counterElement,counterElementComma ){
      if( counterElementComma == true ) {
        counterElement.find('span').countTo({
          formatter: function (value, options) {
            value = value.toFixed(options.decimals);
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return value;
          }
        });
      } else {
        counterElement.find('span').countTo();
      }
    },

    roundedSkill: function(){
      var $roundedSkillEl = $('.rounded-skill');
      if( $roundedSkillEl.length > 0 ){
        $roundedSkillEl.each(function(){
          var element = $(this);

          var roundSkillSize = $(this).attr('data-size');
          var roundSkillAnimate = $(this).attr('data-animate');
          var roundSkillWidth = $(this).attr('data-width');
          var roundSkillColor = $(this).attr('data-color');
          var roundSkillTrackColor = $(this).attr('data-trackcolor');

          if( !roundSkillSize ) { roundSkillSize = 140; }
          if( !roundSkillAnimate ) { roundSkillAnimate = 2000; }
          if( !roundSkillWidth ) { roundSkillWidth = 8; }
          if( !roundSkillColor ) { roundSkillColor = '#0093BF'; }
          if( !roundSkillTrackColor ) { roundSkillTrackColor = 'rgba(0,0,0,0.04)'; }

          var properties = {roundSkillSize:roundSkillSize, roundSkillAnimate:roundSkillAnimate, roundSkillWidth:roundSkillWidth, roundSkillColor:roundSkillColor, roundSkillTrackColor:roundSkillTrackColor};

          if( $('body').hasClass('device-lg') || $('body').hasClass('device-md') ){
            $(this).css({'width':roundSkillSize+'px','height':roundSkillSize+'px'}).animate({opacity: '0'}, 10);
            $(this).appear( function(){
              if (!$(this).hasClass('skills-animated')) {
                $(this).css({opacity: '1'});
                SEMICOLON.widget.runRoundedSkills( $(this), properties );
                $(this).addClass('skills-animated');
              }
            },{accX: 0, accY: -120},'easeInCubic');
          } else {
            SEMICOLON.widget.runRoundedSkills( $(this), properties );
          }
        });
      }
    },

    runRoundedSkills: function( element, properties ){
      element.easyPieChart({
        size: Number(properties.roundSkillSize),
        animate: Number(properties.roundSkillAnimate),
        scaleColor: false,
        trackColor: properties.roundSkillTrackColor,
        lineWidth: Number(properties.roundSkillWidth),
        lineCap: 'square',
        barColor: properties.roundSkillColor
      });
    },

    progress: function(){
      var $progressEl = $('.progress');
      if( $progressEl.length > 0 ){
        $progressEl.each(function(){
          var element = $(this),
            skillsBar = $(this).parent('li'),
            skillValue = skillsBar.attr('data-percent');

          if( $('body').hasClass('device-lg') || $('body').hasClass('device-md') ){
            $(this).appear( function(){
              if (!skillsBar.hasClass('skills-animated')) {
                $(this).find('.counter-instant span').countTo();
                skillsBar.find('.progress').css({width: skillValue + "%"}).addClass('skills-animated');
              }
            },{accX: 0, accY: -120},'easeInCubic');
          } else {
            $(this).find('.counter-instant span').countTo();
            skillsBar.find('.progress').css({width: skillValue + "%"});
          }
        });
      }
    },

    twitterFeed: function(){
      var $twitterFeedEl = $('.twitter-feed');
      if( $twitterFeedEl.length > 0 ){
        $twitterFeedEl.each(function() {
          var element = $(this),
            twitterFeedUser = $(this).attr('data-username'),
            twitterFeedCount = $(this).attr('data-count');

          if( !twitterFeedUser ) { twitterFeedUser = 'twitter' }
          if( !twitterFeedCount ) { twitterFeedCount = 3 }

          $.getJSON('/assets/canvas/include/twitter/tweets.php?username='+ twitterFeedUser +'&count='+ twitterFeedCount, function(tweets){
            if( $(this).hasClass('fslider') ) {
              $(this).find(".slider-wrap").html(sm_format_twitter3(tweets)).promise().done(function(){
                var timer = setInterval(function(){
                  if( $(this).find('.slide').length > 1 ) {
                    $(this).removeClass('customjs');
                    var t = setTimeout( function(){ SEMICOLON.widget.loadFlexSlider(); }, 500);
                    clearInterval(timer);
                  }
                },500);
              });
            } else {
              $(this).html(sm_format_twitter(tweets));
            }
          });
        });
      }
    },

    flickrFeed: function(){
      var $flickrFeedEl = $('.flickr-feed');
      if( $flickrFeedEl.length > 0 ){
        $flickrFeedEl.each(function() {
          var element = $(this),
            flickrFeedID = $(this).attr('data-id'),
            flickrFeedCount = $(this).attr('data-count'),
            flickrFeedType = $(this).attr('data-type'),
            flickrFeedTypeGet = 'photos_public.gne';

          if( flickrFeedType == 'group' ) { flickrFeedTypeGet = 'groups_pool.gne'; }
          if( !flickrFeedCount ) { flickrFeedCount = 9; }

          $(this).jflickrfeed({
            feedapi: flickrFeedTypeGet,
            limit: Number(flickrFeedCount),
            qstrings: {
              id: flickrFeedID
            },
            itemTemplate: '<a href="{{image_b}}" title="{{title}}" data-lightbox="gallery-item">' +
              '<img src="{{image_s}}" alt="{{title}}" />' +
              '</a>'
          }, function(data) {
            SEMICOLON.initialize.lightbox();
          });
        });
      }
    },

    instagramPhotos: function( c_accessToken, c_clientID ){
      var $instagramPhotosEl = $('.instagram-photos');
      if( $instagramPhotosEl.length > 0 ){
        $.fn.spectragram.accessData = {
          accessToken: c_accessToken,
          clientID: c_clientID
        };

        $instagramPhotosEl.each(function() {
          var element = $(this),
            instaGramUsername = $(this).attr('data-user'),
            instaGramTag = $(this).attr('data-tag'),
            instaGramCount = $(this).attr('data-count'),
            instaGramType = $(this).attr('data-type');

          if( !instaGramCount ) { instaGramCount = 9; }

          if( instaGramType == 'tag' ) {
            $(this).spectragram('getRecentTagged',{
              query: instaGramTag,
              max: Number( instaGramCount ),
              size: 'medium',
              wrapEachWith: ' '
            });
          } else if( instaGramType == 'user' ) {
            $(this).spectragram('getUserFeed',{
              query: instaGramUsername,
              max: Number( instaGramCount ),
              size: 'medium',
              wrapEachWith: ' '
            });
          } else {
            $(this).spectragram('getPopular',{
              max: Number( instaGramCount ),
              size: 'medium',
              wrapEachWith: ' '
            });
          }
        });
      }
    },

    dribbbleShots: function(){
      var $dribbbleShotsEl = $('.dribbble-shots');
      if( $dribbbleShotsEl.length > 0 ){
        $dribbbleShotsEl.each(function() {
          var element = $(this),
            dribbbleUsername = $(this).attr('data-user'),
            dribbbleCount = $(this).attr('data-count'),
            dribbbleList = $(this).attr('data-list'),
            dribbbleType = $(this).attr('data-type');

          if( !dribbbleCount ) { dribbbleCount = 9; }

          if( dribbbleType == 'follows' ) {
            $.jribbble.getShotsThatPlayerFollows( dribbbleUsername , function (followedShots) {
              var html = [];
              $.each(followedShots.shots, function (i, shot) {
                html.push('<a href="' + shot.url + '" target="_blank">');
                html.push('<img src="' + shot.image_teaser_url + '" ');
                html.push('alt="' + shot.title + '"></a>');
              });
              $(this).html(html.join(''));
            }, {page: 1, per_page: Number(dribbbleCount)});
          } else if( dribbbleType == 'user' ) {
            $.jribbble.getShotsByPlayerId( dribbbleUsername , function (playerShots) {
              var html = [];
              $.each(playerShots.shots, function (i, shot) {
                html.push('<a href="' + shot.url + '" target="_blank">');
                html.push('<img src="' + shot.image_teaser_url + '" ');
                html.push('alt="' + shot.title + '"></a>');
              });
              $(this).html(html.join(''));
            }, {page: 1, per_page: Number(dribbbleCount)});
          } else if( dribbbleType == 'list' ) {
            $.jribbble.getShotsByList( dribbbleList , function (listDetails) {
              var html = [];
              $.each(listDetails.shots, function (i, shot) {
                html.push('<a href="' + shot.url + '" target="_blank">');
                html.push('<img src="' + shot.image_teaser_url + '" ');
                html.push('alt="' + shot.title + '"></a>');
              });
              $(this).html(html.join(''));
            }, {page: 1, per_page: Number(dribbbleCount)});
          }
        });
      }
    },

    navTree: function(){
      var $navTreeEl = $('.nav-tree');
      if( $navTreeEl.length > 0 ){
        $navTreeEl.each( function(){
          var element = $(this),
            elementSpeed = $(this).attr('data-speed'),
            elementEasing = $(this).attr('data-easing');

          if( !elementSpeed ) { elementSpeed = 250; }
          if( !elementEasing ) { elementEasing = 'swing'; }

          $(this).find( 'ul li:has(ul)' ).addClass('sub-menu');
          $(this).find( 'ul li:has(ul) > a' ).append( ' <i class="icon-angle-down"></i>' );

          $(this).find( 'ul li:has(ul) > a' ).click( function(e){
            var childElement = $(this);
            $(this).find( 'ul li' ).not(childElement.parents()).removeClass('active');
            childElement.parent().children('ul').slideToggle( Number(elementSpeed), elementEasing, function(){
              $(this).find('ul').hide();
              $(this).find('li.active').removeClass('active');
            });
            $(this).find( 'ul li > ul' ).not(childElement.parent().children('ul')).not(childElement.parents('ul')).slideUp( Number(elementSpeed), elementEasing );
            childElement.parent('li:has(ul)').toggleClass('active');
            e.preventDefault();
          });
        });
      }
    },

    masonryThumbs: function(){
      var $masonryThumbsEl = $('.masonry-thumbs');
      if( $masonryThumbsEl.length > 0 ){
        $masonryThumbsEl.each( function(){
          var masonryItemContainer = $(this);
          SEMICOLON.widget.masonryThumbsArrange( masonryItemContainer );
        });
      }
    },

    masonryThumbsArrange: function( element ){
      SEMICOLON.initialize.setFullColumnWidth( element );
      element.isotope('layout');
    },

    notifications: function( element ){
      toastr.clear();
      var notifyElement = $(element),
        notifyPosition = notifyElement.attr('data-notify-position'),
        notifyType = notifyElement.attr('data-notify-type'),
        notifyMsg = notifyElement.attr('data-notify-msg'),
        notifyCloseButton = notifyElement.attr('data-notify-close');

      if( !notifyPosition ) { notifyPosition = 'toast-top-right'; } else { notifyPosition = 'toast-' + notifyElement.attr('data-notify-position'); }
      if( !notifyMsg ) { notifyMsg = 'Please set a message!'; }
      if( notifyCloseButton == 'true' ) { notifyCloseButton = true; } else { notifyCloseButton = false; }

      toastr.options.positionClass = notifyPosition;
      toastr.options.closeButton = notifyCloseButton;
      toastr.options.closeHtml = '<button><i class="icon-remove"></i></button>';

      if( notifyType == 'warning' ) {
        toastr.warning(notifyMsg);
      } else if( notifyType == 'error' ) {
        toastr.error(notifyMsg);
      } else if( notifyType == 'success' ) {
        toastr.success(notifyMsg);
      } else {
        toastr.info(notifyMsg);
      }

      return false;
    },

    textRotater: function(){
      if( $('.text-rotater').length > 0 ){
        $('.text-rotater').each(function(){
          var element = $(this),
            trRotate = $(this).attr('data-rotate'),
            trSpeed = $(this).attr('data-speed'),
            trSeparator = $(this).attr('data-separator');

          if( !trRotate ) { trRotate = "fade"; }
          if( !trSpeed ) { trSpeed = 1200; }
          if( !trSeparator ) { trSeparator = ","; }

          var tRotater = $(this).find('.t-rotate');

          tRotater.Morphext({
            animation: trRotate,
            separator: trSeparator,
            speed: Number(trSpeed)
          });
        });
      }
    },

    linkScroll: function(){
      $("a[data-scrollto]").click(function(){
        var element = $(this),
          divScrollToAnchor = $(this).attr('data-scrollto'),
          divScrollSpeed = $(this).attr('data-speed'),
          divScrollOffset = $(this).attr('data-offset'),
          divScrollEasing = $(this).attr('data-easing');

        if( !$(this).attr('data-speed') ) { divScrollSpeed = 750; }
        if( !$(this).attr('data-offset') ) { divScrollOffset = SEMICOLON.initialize.topScrollOffset(); }
        if( !$(this).attr('data-easing') ) { divScrollEasing = 'easeOutQuad'; }

        $('html,body').stop(true).animate({
          'scrollTop': $( $(this).attr('data-href') ).offset().top - Number(divScrollOffset)
        }, Number(divScrollSpeed), divScrollEasing);

        return false;
      });
    },

    extras: function(){
      $('[data-toggle="tooltip"]').tooltip({container: 'body'});
      $('#primary-menu-trigger,#overlay-menu-close').click(function() {
        $( '#primary-menu > ul, #primary-menu > div > ul' ).toggleClass("show");
        return false;
      });
      $('#page-submenu-trigger').click(function() {
        $('body').toggleClass('top-search-open', false);
        $('#page-menu').toggleClass("pagemenu-active");
        return false;
      });
      $('#page-menu').find('nav').click(function(e){
        $('body').toggleClass('top-search-open', false);
        $('#top-cart').toggleClass('top-cart-open', false);
      });
      if( SEMICOLON.isMobile.any() ){
        $('body').addClass('device-touch');
      }
      // var el = {
      //     darkLogo : $("<img>", {src: $('#logo').find('.standard-logo').attr('data-dark-logo')}),
      //     darkRetinaLogo : $("<img>", {src: $('#logo').find('.retina-logo').attr('data-dark-logo')})
      // };
      // el.darkLogo.prependTo("body");
      // el.darkRetinaLogo.prependTo("body");
      // el.darkLogo.css({'position':'absolute','z-index':'-100'});
      // el.darkRetinaLogo.css({'position':'absolute','z-index':'-100'});
    }

  };

  SEMICOLON.isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (SEMICOLON.isMobile.Android() || SEMICOLON.isMobile.BlackBerry() || SEMICOLON.isMobile.iOS() || SEMICOLON.isMobile.Opera() || SEMICOLON.isMobile.Windows());
    }
  };

  SEMICOLON.documentOnResize = {

    init: function(){

      var t = setTimeout( function(){
        SEMICOLON.header.topsocial();
        SEMICOLON.header.fullWidthMenu();
        SEMICOLON.header.overlayMenu();
        SEMICOLON.initialize.fullScreen();
        SEMICOLON.initialize.verticalMiddle();
        SEMICOLON.initialize.maxHeight();
        SEMICOLON.initialize.testimonialsGrid();
        SEMICOLON.slider.captionPosition();
        SEMICOLON.portfolio.arrange();
        SEMICOLON.portfolio.portfolioDescMargin();
        SEMICOLON.widget.tabsJustify();
        SEMICOLON.widget.html5Video();
        SEMICOLON.widget.masonryThumbs();
        SEMICOLON.initialize.dataStyles();
        SEMICOLON.initialize.dataResponsiveHeights();
      }, 500 );

    }

  };

  SEMICOLON.documentOnReady = {

    init: function(){
      SEMICOLON.initialize.init();
      SEMICOLON.header.init();
      if( $('#slider').length > 0 ) { SEMICOLON.slider.init(); }
      if( $('#portfolio').length > 0 ) { SEMICOLON.portfolio.init(); }
      SEMICOLON.widget.init();
      SEMICOLON.documentOnReady.windowscroll();
    },

    windowscroll: function(){

      var headerOffset = 0;
      var headerWrapOffset = 0;

      if( $('#header').length > 0 ) { headerOffset = $('#header').offset().top; }
      if( $('#header').length > 0 ) { headerWrapOffset = $('#header-wrap').offset().top; }

      var headerDefinedOffset = $('#header').attr('data-sticky-offset');
      if( typeof headerDefinedOffset !== 'undefined' ) {
        if( headerDefinedOffset == 'full' ) {
          headerWrapOffset = $(window).height();
          var headerOffsetNegative = $('#header').attr('data-sticky-offset-negative');
          if( typeof headerOffsetNegative !== 'undefined' ) { headerWrapOffset = headerWrapOffset - headerOffsetNegative - 1; }
        } else {
          headerWrapOffset = Number(headerDefinedOffset);
        }
      }

      $(window).on( 'scroll', function(){

        SEMICOLON.initialize.goToTopScroll();
        $('body.open-header.close-header-on-scroll').removeClass("side-header-open");
        SEMICOLON.header.stickyMenu( headerWrapOffset );
        SEMICOLON.header.darkLogo();

      });

      window.addEventListener('scroll', onScrollSliderParallax, false);

      if( $('.one-page-menu').length > 0 ){
        $(window).scrolled(function() {
          SEMICOLON.header.onepageScroller();
        });
      }
    }

  };

  SEMICOLON.documentOnLoad = {

    init: function(){
      SEMICOLON.slider.captionPosition();
      SEMICOLON.slider.swiperSliderMenu();
      SEMICOLON.slider.revolutionSliderMenu();
      SEMICOLON.initialize.maxHeight();
      SEMICOLON.initialize.testimonialsGrid();
      SEMICOLON.initialize.verticalMiddle();
      SEMICOLON.initialize.stickFooterOnSmall();
      SEMICOLON.portfolio.portfolioDescMargin();
      SEMICOLON.portfolio.arrange();
      SEMICOLON.widget.parallax();
      SEMICOLON.widget.loadFlexSlider();
      SEMICOLON.widget.html5Video();
      SEMICOLON.widget.masonryThumbs();
      SEMICOLON.slider.owlCaptionInit();
      SEMICOLON.header.topsocial();
      SEMICOLON.header.responsiveMenuClass();
    }

  };

  var $window = $(window),
    $body = $('body'),
    $wrapper = $('#wrapper'),
    $header = $('#header'),
    $headerWrap = $('#header-wrap'),
    $footer = $('#footer'),
    oldHeaderClasses = $('#header').attr('class'),
    oldHeaderWrapClasses = $('#header-wrap').attr('class'),
    stickyMenuClasses = $('#header').attr('data-sticky-class'),
    responsiveMenuClasses = $('#header').attr('data-responsive-class'),
    defaultLogo = $('#logo').find('.standard-logo'),
    defaultLogoWidth = $('#logo').find('.standard-logo').find('img').outerWidth(),
    retinaLogo = $('#logo').find('.retina-logo'),
    defaultLogoImg = $('#logo').find('.standard-logo').find('img').attr('src'),
    retinaLogoImg = $('#logo').find('.retina-logo').find('img').attr('src'),
    defaultDarkLogo = $('#logo').find('.standard-logo').attr('data-dark-logo'),
    retinaDarkLogo = $('#logo').find('.retina-logo').attr('data-dark-logo'),
    $pagemenu = $('#page-menu'),
    $onePageMenuEl = $('.one-page-menu'),
    onePageGlobalOffset = 0,
    $portfolio = $('#portfolio'),
    $slider = $('#slider'),
    $sliderParallaxEl = $('.slider-parallax'),
    $pageTitle = $('#page-title'),
    $portfolioItems = $('.portfolio-ajax').find('.portfolio-item'),
    $portfolioDetails = $('#portfolio-ajax-wrap'),
    $portfolioDetailsContainer = $('#portfolio-ajax-container'),
    $portfolioAjaxLoader = $('#portfolio-ajax-loader'),
    prevPostPortId = '',
    $topSearch = $('#top-search'),
    $topCart = $('#top-cart'),
    $verticalMiddleEl = $('.vertical-middle'),
    $topSocialEl = $('#top-social').find('li'),
    $siStickyEl = $('.si-sticky'),
    $dotsMenuEl = $('.dots-menu'),
    $goToTopEl = $('#gotoTop'),
    $fullScreenEl = $('.full-screen'),
    $commonHeightEl = $('.common-height'),
    $testimonialsGridEl = $('.testimonials-grid'),
    $pageSectionEl = $('.page-section'),
    $owlCarouselEl = $('.owl-carousel'),
    $parallaxEl = $('.parallax'),
    $parallaxPageTitleEl = $('.page-title-parallax'),
    $youtubeBgPlayerEl = $('.yt-bg-player'),
    $textRotaterEl = $('.text-rotater');

  $(document).ready( SEMICOLON.documentOnReady.init );
  $(window).load( SEMICOLON.documentOnLoad.init );
  $(window).on( 'resize', SEMICOLON.documentOnResize.init );

})(jQuery);
