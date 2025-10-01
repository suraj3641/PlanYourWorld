// ✅ Countdown Timer
const targetDate = new Date("Oct 9, 2025 19:30:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// ✅ Navbar & Mobile Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.getElementById("mobileToggle");
  const navbarNav = document.getElementById("navbarNav");

  // Toggle mobile menu
  mobileToggle.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
    mobileToggle.classList.toggle("open");
  });

  // Close menu when a nav-link (except dropdown-toggle) is clicked
  document.querySelectorAll(".nav-link").forEach(link => {
    if (!link.classList.contains("dropdown-toggle")) {
      link.addEventListener("click", () => {
        navbarNav.classList.remove("active");
        mobileToggle.classList.remove("open");
      });
    }
  });

  // Mobile dropdown toggle
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(drop => {
    const toggle = drop.querySelector(".dropdown-toggle");
    const menu = drop.querySelector(".dropdown-menu");

    toggle.addEventListener("click", (e) => {
      if (window.innerWidth < 992) {
        e.preventDefault();
        menu.classList.toggle("show");
      }
    });
  });
});
