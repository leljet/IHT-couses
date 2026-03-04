document.addEventListener("DOMContentLoaded", () => {

  const counters = document.querySelectorAll(".counter");

  function animateCounters() {
    counters.forEach(counter => {

      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = 20;

      const updateCount = () => {
        const increment = target / 100;

        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count) + "%";
          setTimeout(updateCount, speed);
        } else {
          counter.innerText = target + "%";
        }
      };

      updateCount();
    });
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => counter.innerText = "0");
        animateCounters();
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(document.querySelector(".stats"));

});     