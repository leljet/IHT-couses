document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".slider-container");
  const track = document.querySelector(".slider-track");
  const cards = document.querySelectorAll(".teacher-card");
  const dotsContainer = document.querySelector(".dots");


  
let isDown = false;
let startX;
let scrollStart;
let currentTranslate = 0;

container.addEventListener("pointerdown", (e) => {
  isDown = true;
  startX = e.clientX;
  scrollStart = currentTranslate;
  container.style.cursor = "grabbing";
});

container.addEventListener("pointermove", (e) => {
  if (!isDown) return;

  const diff = e.clientX - startX;
  currentTranslate = scrollStart + diff;

  track.style.transform = `translateX(${currentTranslate}px)`;
});

container.addEventListener("pointerup", () => {
  isDown = false;
  container.style.cursor = "grab";
});

container.addEventListener("pointerleave", () => {
  isDown = false;
  container.style.cursor = "grab";
});


cards.forEach((card, i) => {
  card.addEventListener("click", () => {

    if (i === index) return; // если активная — ничего

    if (i > index) {
      index = (index + 1) % cards.length; // вправо
    } else {
      index = (index - 1 + cards.length) % cards.length; // влево
    }

    updateSlider();
    restartAuto();
  });
});


  
  // если хоть чего-то нет — значит селекторы/HTML не совпали или скрипт запустился не там
  if (!container || !track || !dotsContainer || cards.length === 0) {
    console.error("[TeachersSlider] Not found:", {
      container: !!container,
      track: !!track,
      dots: !!dotsContainer,
      cards: cards.length,
    });
    return;
  }

  let index = 0;
  let timerId = null;

  function getGap() {
    const style = getComputedStyle(track);
    const g = parseFloat(style.gap);
    return Number.isFinite(g) ? g : 0;
  }

  function setSidePadding() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    const sidePadding = container.clientWidth / 2 - cardWidth / 2;
    track.style.paddingLeft = `${Math.max(0, sidePadding)}px`;
    track.style.paddingRight = `${Math.max(0, sidePadding)}px`;
  }

  function updateSlider() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = getGap();
    const offset = index * (cardWidth + gap);

    track.style.transform = `translateX(-${offset}px)`;

    cards.forEach((c) => c.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));

    cards[index].classList.add("active");
    dots[index].classList.add("active");
  }

  // точки (очистить на всякий случай)
  dotsContainer.innerHTML = "";
  cards.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => {
      index = i;
      updateSlider();
      restartAuto();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".dot");

  function restartAuto() {
    if (timerId) clearInterval(timerId);
    timerId = setInterval(() => {
      index = (index + 1) % cards.length;
      updateSlider();
    }, 5000);
  }

  // старт
  setSidePadding();
  updateSlider();
  restartAuto();

  window.addEventListener("resize", () => {
    setSidePadding();
    updateSlider();
  });
});


