/* ---------- SCRIPT.JS ---------- */

/* ---------- THEME SWITCHING ---------- */
const themeButtons = document.querySelectorAll(".theme-btn");

themeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.theme;
    document.documentElement.setAttribute("data-theme", theme);
    themeButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    localStorage.setItem("site-theme", theme);
  });
});

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
    item.classList.add("fade-in-up"); 
  });
});

/* ---------- CARD INTERACTIVITY ---------- */
const cards = document.querySelectorAll(".content-card");

cards.forEach(card => {
  const badge = card.querySelector(".new-badge");
  if(badge) setTimeout(() => badge.style.display = "none", 3000);

  card.addEventListener("click", () => {
    const desc = card.querySelector("p")?.innerText || "No description";
    console.log("Card clicked:", desc);
  });
});

/* ---------- MOBILE NAV ---------- */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if(navToggle && navLinks) {
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
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

/* ---------- FOOTER YEAR ---------- */
const yearEl = document.querySelector(".current-year");
if(yearEl) yearEl.textContent = new Date().getFullYear();
