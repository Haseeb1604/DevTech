(function () {
  'use strict';

  let _ = selector => {
    const el = document.querySelectorAll(selector);
    return el.length > 1 ? el : el[0];
  }

  window.addEventListener('load', () => {
    /*	Page Preloader   */
    setInterval(function () {
      let preloader = _('#preloader');
      preloader.style.display = 'none';
      preloader.style.transition = 'all 1s ease';
    }, 400);
    _('.introVideo').play();
  })

  window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let navbar = _('.navigation');
    if (scroll > 200) navbar.classList.add("sticky-header")
    else navbar.classList.remove("sticky-header")
  });

})();