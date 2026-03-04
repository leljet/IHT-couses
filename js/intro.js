const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, index * 180);
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));