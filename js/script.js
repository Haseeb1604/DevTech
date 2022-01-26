(function ($) {
  'use strict';

  /* ========================================================================= */
  /*	Page Preloader
  /* ========================================================================= */

  window.addEventListener('load', ()=>{
    setInterval(function(){ 
      let preloader = document.getElementById('preloader');
      preloader.style.display = 'none';
      preloader.style.transition = 'all 1s ease';
    }, 500);
    
  })
  

  //Hero Slider
  $('.hero-slider').slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
    dots: false,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  $('.hero-slider').slickAnimation();


  /* ========================================================================= */
  /*	Header Scroll Background Change
  /* ========================================================================= */
  window.addEventListener('scroll', () =>{
    let scroll = window.pageYOffset;
    let navbar = document.querySelector('.navigation');
    if(scroll > 200) {
        navbar.classList.add("sticky-header")
    }else{
        navbar.classList.remove("sticky-header")
    }
  });

})(jQuery);
