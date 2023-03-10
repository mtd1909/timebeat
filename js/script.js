$(document).ready(function() {
  let header = document.querySelector('.header');
  let body = document.querySelector('body');
  window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 177);
    body.classList.toggle('header-sticky', window.scrollY > 177)
  });

  // Vanilla Menu //
  function functionScroll() {
    var section = document.querySelectorAll('.section'),
      sections = {},
      i = 0;
    Array.prototype.forEach.call(section, function (e) {
      sections[e.id] = e.offsetTop;
    });
    let header = document.querySelector('.header');
    let height = header.offsetHeight;
    for (i in sections) {
      if (sections[i] <= window.pageYOffset + height) {
        const active = document.querySelector('.active');
        if (active) {
          active.classList.remove('active');
        }
        if (document.querySelector('a[href*=' + i + ']')) {
          document.querySelector('a[href*=' + i + ']').classList.add('active');
        }
      }
    }
  }
  window.addEventListener('scroll', functionScroll);
  window.addEventListener('resize', functionScroll);
  
  AOS.init({
    duration: 1500,
  })

  $('.banner__slide').owlCarousel({
    nav: true,
    dots: true,
    loop: true,
    items: 1,
    lazyLoad: true,
    responsive:{
      768: {
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
      }
    }
  })
  
  $('.services__wrap').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1300,
    lazyLoad: true,
    autoplayHoverPause: true,
    responsive:{
      0: {
        margin: 30,
      },
      768: {
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
      },
      1440: {
        margin: 0,
      }
    }
  })
  
  $('.work__wrap').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 5,
    margin: 20,
    autoplay: true,
    lazyLoad: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
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

  var mySwiper = new Swiper(".projects-slide", {
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
  })

  var mySwiper2 = new Swiper(".wrap__human", {
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    lazy: true,
    loopAdditionalSlides: 30,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
  })

  // Click show menu
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
  
  $( '.header__menu .header__menu-items .body__text' ).on( 'click', function(e){
    $( '.header__menu .header__menu-items .body__text' ).removeClass( 'active' );
    $( this ).addClass( 'active' );
    var href = $(this).attr( 'href' );
    $( 'html, body' ).animate({
      scrollTop: $( href ).offset().top
    }, 1000 );
    e.preventDefault();
  });

  $( '.header__logo' ).on( 'click', function(e){
    var href = $(this).attr( 'href' );
    $( 'html, body' ).animate({
      scrollTop: $( href ).offset().top
    }, 1000 );
    e.preventDefault();
  });

  $( '.footer__img' ).on( 'click', function(e){
    var href = $(this).attr( 'href' );
    $( 'html, body' ).animate({
      scrollTop: $( href ).offset().top
    }, 1000 );
    e.preventDefault();
  });

})

function sendEmail() {
  var templateParams = {
    subject: document.getElementById('subject').value,
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    company: document.getElementById('company').value,
    message: document.getElementById('message').value,
  };
  
  emailjs.send('service_f2xjkhm', 'template_qkwpakn', templateParams)

}