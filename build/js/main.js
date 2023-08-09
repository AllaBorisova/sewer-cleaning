jQuery(document).ready(function ($) {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    $(".header").toggleClass("open-menu");
  });

  $(".reviews-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,

    autoplaySpeed: 2000,
    prevArrow: "<button type='button' class='slick-prev'></button>",
    nextArrow: "<button type='button' class='slick-next'></button>",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".section-work__item").click(function () {
    $(".section-work__item").removeClass("active");
    $(this).addClass("active");
  });
});
