document.addEventListener("DOMContentLoaded", () => {
    var tl = gsap.timeline();

    // Loader Animation
    tl.to("#loader", {
        top: '-150%',
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out",
        onComplete: () => {
            document.getElementById("loader").classList.add("hidden");
        }
    }).to("#loader h1", {
        opacity: 0,
        duration: 0.5,
        ease: "expo.out"
    });

    // Locomotive Scroll Initialization
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
    });

    // Scroll to Top on Click
    document.querySelector('#page4').addEventListener("click", () => {
        scroll.scrollTo(0);
    });

    // Toggle Navigation
    document.querySelector(".nav li i").addEventListener("click", () => {
        document.querySelectorAll(".lis").forEach(item => {
            item.classList.toggle('active');
        });
        document.querySelector(".nav li i").classList.toggle('rotated');
    });

    // Set Video Playback Speed
    const video = document.querySelector('.wide');
    video.playbackRate = 2; // Set playback speed to 2x
});
