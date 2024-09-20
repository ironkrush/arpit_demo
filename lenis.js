const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.set(".canv", { scale: 0 });

gsap.to(".canv", {
    scale: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".landing",
        start: "bottom 99%",
        scrub: 2,
    }
});