const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  //   direction: 'vertical',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1400: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },
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

const recommendedSlider = new Swiper('.recommended-slider', {
  // Optional parameters
  //   direction: 'vertical',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 3,
    },
    1350: {
      slidesPerView: 2,
    },
  },
  // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});

const myRecommendedChannel = new Swiper('.recommendedChannel-slider', {
  // Optional parameters
  //   direction: 'vertical',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1400: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },
  // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  // Navigation arrows
  navigation: {
    nextEl: '.myRecommendedChannel-button-next',
    prevEl: '.myRecommendedChannel-button-prev',
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});

const searchBtn = document.querySelector('.mobile-search');
const searchGroup = document.querySelector('.search-group');
searchBtn.addEventListener('click', () => {
  searchGroup.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 640) {
  myRecommendedChannel.destroy();
  recommendedSlider.destroy();
  swiper.destroy();
}
