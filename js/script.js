$(document).ready(function() {
  $('.banner__slide').owlCarousel({
    nav: true,
    dots: true,
    loop: true,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout: 4000,
    smartSpeed: 1300,
    autoHeight: true,
    responsive:{
    }
  })
  
  $('.services__wrap').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout: 4000,
    smartSpeed: 1300,
    responsive:{
      0: {
        margin: 30,
      },
      1440: {
        margin: 0,
      }
    }
  })
  
  $('.work__wrap').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    items: 5,
    margin: 20,
    responsive:{
      991: {
        items: 4,
      },
      767: {
        items: 3,
      },
      479: {
        items: 2,
      },
      0: {
        items: 1,
      }
    }
  })
  
  $('.partners__header').on( 'click', 'a', function() {
    var filter = $(this).attr('data-filter');
    
    $('.mySwiper .swiper-slide').css('display', 'none')
    $('.mySwiper .swiper-slide' + filter).css('display', '')
    $( '.partners__header-items a' ).removeClass( 'filter-active' );
    $( this ).addClass( 'filter-active' );
    swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      swiper.slideTo(0);
      swiper.scrollbar.updateSize();
      return false;
  });
  
  var swiper = new Swiper ('.mySwiper', {
    observer: true,
    runCallbacksOnInit: true,
    observer: true,
    smartSpeed:5000,
    speed: 4000,
    scrollbarHide:false,
    updateOnImagesReady: true
  })

  // Click hien menu
$('.menu__bars').click(function(e) {
  $('.header__menu').toggleClass('show__menu');
  $('.overlay_container').toggleClass('menu_bars_overlay');
  e.stopPropagation();
  e.stopImmediatePropagation();
})

$('.overlay_container').click(function() {
  $('.header__menu').removeClass('show__menu');
  $('.overlay_container').removeClass('menu_bars_overlay');
})  
})