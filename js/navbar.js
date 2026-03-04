const navScroll = document.getElementById("navScroll");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navScroll.classList.add("active");
  } else {
    navScroll.classList.remove("active");
  }
});