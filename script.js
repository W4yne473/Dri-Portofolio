const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu-close");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-links a");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

mobileMenuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

mobileMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});