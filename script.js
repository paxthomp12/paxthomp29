/* ===========================================
   SCRIPT.JS – INTERACTIVITY FOR YOUR SITE
   =========================================== */

/* ---------- THEME SWITCHING ---------- */
const themeButtons = document.querySelectorAll(".theme-btn");

themeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.theme; // "light" or "dark"
    document.documentElement.setAttribute("data-theme", theme);

    // Highlight active button
    themeButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Optional: store user preference in localStorage
    localStorage.setItem("site-theme", theme);
  });
});

// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("site-theme");
  if(savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeButtons.forEach(b => {
      b.classList.toggle("active", b.dataset.theme === savedTheme);
    });
  }
});


/* ---------- HERO ANIMATIONS ---------- */
window.addEventListener("DOMContentLoaded", () => {
  const heroItems = document.querySelectorAll(".hero-intro > *");

  heroItems.forEach((item, i) => {
    item.style.animationDelay = `${i * 0.15}s`;
    item.classList.add("fade-in-up"); // Make sure your CSS has this animation
  });
});


/* ---------- CARD INTERACTIVITY ---------- */
const cards = document.querySelectorAll(".content-card");

cards.forEach(card => {
  const badge = card.querySelector(".new-badge");

  // Example: hide badge after 3 seconds
  if(badge) {
    setTimeout(() => badge.style.display = "none", 3000);
  }

  // Card click event
  card.addEventListener("click", () => {
    const desc = card.querySelector(".card-description")?.innerText || "No description";
    console.log("Card clicked:", desc);
    // Optional: Add more interactions here (modal popup, redirect, etc.)
  });
});


/* ---------- MOBILE NAVIGATION ---------- */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if(navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open"); // CSS handles showing/hiding
  });

  // Optional: close nav when link clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}


/* ---------- SMOOTH SCROLLING ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target) target.scrollIntoView({ behavior: "smooth" });
  });
});


/* ---------- OPTIONAL: DYNAMIC YEAR IN FOOTER ---------- */
const yearEl = document.querySelector(".current-year");
if(yearEl) yearEl.textContent = new Date().getFullYear();


/* ---------- OPTIONAL: ADD MORE CUSTOM INTERACTIONS BELOW ---------- */
// Example: Button hover animation, modal popups, API data, etc.

