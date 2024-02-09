const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  //   direction: 'vertical',
  loop: true,
  slidesPerView: 5,
  // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});
