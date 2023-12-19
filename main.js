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

  //  close nav menu when menu item is clicked
  if (window.innerWidth < 1024) {
    document.querySelectorAll("#nav__Items li a").forEach((navItem) => {
      navItem.addEventListener("click", () => {
        closeNav();
      });
    });
  }

  // change navbar styles on scroll
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
      nav.classList.add("window-scroll");
    } else {
      nav.classList.remove("window-scroll");
    }
  });
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
