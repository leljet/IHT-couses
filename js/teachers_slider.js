const track = document.querySelector(".slider-track");
const cards = document.querySelectorAll(".teacher-card");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function updateSlider(){

  const cardWidth = cards[0].offsetWidth + 40;

  track.style.transform =
  `translateX(-${index * cardWidth}px)`;

  cards.forEach(c => c.classList.remove("active"));

  if(cards[index])
  cards[index].classList.add("active");
}

next.onclick = () =>{

  if(index < cards.length-1)
  index++;

  updateSlider();
}

prev.onclick = () =>{

  if(index > 0)
  index--;

  updateSlider();
}

updateSlider();