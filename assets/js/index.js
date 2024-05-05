window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const fixedNavbar = document.getElementById("fixedNavbar");

  if (scrollTop >= 100) {
    fixedNavbar.classList.remove("hidden");
  } else {
    fixedNavbar.classList.add("hidden");
  }
});

// banner
$(".fade").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
});

// valuable clients
$(".your-class").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
