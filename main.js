document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelector("#nav__items");
  const openNavBtn = document.getElementById("open__nav-btn");
  const closeNavBtn = document.getElementById("close__nav-btn");

  openNavBtn.addEventListener("click", () => {
    navItems.style.display = "flex";
    closeNavBtn.style.display = "inline-block";
    openNavBtn.style.display = "none";
  });

  const closeNav = () => {
    navItems.style.display = "none";
    closeNavBtn.style.display = "none";
    openNavBtn.style.display = "inline-block";
  };

  closeNavBtn.addEventListener("click", closeNav);

  // Initialize Swiper Testimonials section
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Set to 1 slide per view for mobile devices
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  // responsive breakpoints
});
