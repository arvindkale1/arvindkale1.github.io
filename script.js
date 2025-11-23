// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Trigger animations on scroll
const elements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .zoom-in");

function showElements() {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.animationPlayState = "running";
        }
    });
}

window.addEventListener("scroll", showElements);
showElements();
