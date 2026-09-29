const storySections = document.querySelectorAll(".story-section");

window.addEventListener("scroll", () => {

    storySections.forEach((section) => {

        const background = section.querySelector(".storybg");

        const sectionPosition =
            section.getBoundingClientRect().top;

        background.style.transform =
            `translateY(${sectionPosition * -0.15}px)`;

    });

});


const storyContents = document.querySelectorAll(".story-content");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

});


storyContents.forEach((content) => {
    observer.observe(content);
});