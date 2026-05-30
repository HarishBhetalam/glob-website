// Sticky nav background on scroll
const nav = document.getElementById("nav");
if (nav) {
  const onScroll = () => {
    if (window.scrollY > 20) {
      nav.classList.add("scrolled");
    } else if (!nav.dataset.alwaysSolid) {
      nav.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// Reveal-on-scroll animations
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}
