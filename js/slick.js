const track = document.querySelector(".slider-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.onclick = () => {
  track.scrollBy({
    left: 460,
    behavior: "smooth"
  });
};

prev.onclick = () => {
  track.scrollBy({
    left: -460,
    behavior: "smooth"
  });
};