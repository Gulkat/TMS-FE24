const swiper = new Swiper('.swiper', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
   },

   slidesPerView: 3,
   spaceBetween: 30,
   // slidesPerGroup: 3,
   speed: 800,
   mousewheel: {
      invert: false,
   },

   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      }
   }
});