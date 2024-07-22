var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function() {
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
root: null,
rootMargin: '0px',
threshold: 0.1
};

const observerCallback = (entries, observer) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp'); // Change to the desired animation class
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
    }
});
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

elementsToAnimate.forEach(element => {
observer.observe(element);
});
});