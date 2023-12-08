document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelector("#nav__items");
  const openNavBtn = document.getElementById("open__nav-btn");
  const closeNavBtn = document.getElementById("close__nav-btn");

  openNavBtn.addEventListener("click", () => {
    navItems.style.display = "flex";
    closeNavBtn.style.display = "inline-block"; // Show close button when opening nav
    openNavBtn.style.display = "none"; // Hide open button when opening nav
  });

  const closeNav = () => {
    navItems.style.display = "none";
    closeNavBtn.style.display = "none";
    openNavBtn.style.display = "inline-block";
  };

  closeNavBtn.addEventListener("click", closeNav);
});
