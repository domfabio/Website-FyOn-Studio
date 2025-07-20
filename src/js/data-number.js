const counters = document.querySelectorAll("[data-target]");

const animateCount = (el, target) => {
  let current = 0;
  const increment = target / 100;

  const update = () => {
    current += increment;
    if (current < target) {
      el.textContent = "+" + Math.ceil(current);
      requestAnimationFrame(update);
    } else {
      el.textContent = "+" + target;
    }
  };

  update();
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.getAttribute("data-target");

        if (el.textContent === "0" || el.textContent === "+0") {
          animateCount(el, target);
        }

        observer.unobserve(el);
      }
    });
  },
  {
    threshold: 0.9,
  },
);

counters.forEach((counter) => {
  observer.observe(counter);
});
