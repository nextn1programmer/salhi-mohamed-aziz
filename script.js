document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.getElementById("HOME");
    const allSections = document.querySelectorAll("section");
    allSections.forEach(section => {
        section.classList.add("section-hidden");
        section.classList.remove("section-visible");
    });
    homeSection.classList.remove("section-hidden");
    homeSection.classList.add("section-visible");
});
document.documentElement.style.scrollBehavior = "smooth";
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");
navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").replace("#", "");
        const targetSection = document.getElementById(targetId);
        sections.forEach(section => {
            section.classList.remove("section-visible");
            section.classList.add("section-hidden");
        });
        targetSection.classList.remove("section-hidden");
        targetSection.classList.add("section-visible");
    });
});