(function () {
  'use strict';

  let _ = selector =>{
    const el =  document.querySelectorAll(selector);
    return el.length > 1 ? el : el[0];
  }

  /* ========================================================================= */
  /*	Page Preloader
  /* ========================================================================= */
  window.addEventListener('load', ()=>{
    setInterval(function(){ 
      let preloader = _('#preloader');
      preloader.style.display = 'none';
      preloader.style.transition = 'all 1s ease';
    }, 400);
    let video = _('.introVideo');
    video.mute();
    video.play();
  })
  

  //Hero Slider
  // $('.hero-slider').slick({
  //   autoplay: true,
  //   infinite: true,
  //   arrows: true,
  //   prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
  //   nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
  //   dots: false,
  //   autoplaySpeed: 7000,
  //   pauseOnFocus: false,
  //   pauseOnHover: false
  // });
  // $('.hero-slider').slickAnimation();


  /* ========================================================================= */
  /*	Header Scroll Background Change
  /* ========================================================================= */
  window.addEventListener('scroll', () =>{
    let scroll = window.pageYOffset;
    let navbar = _('.navigation');
    if(scroll > 200) navbar.classList.add("sticky-header")
    else             navbar.classList.remove("sticky-header")
  });

})();
