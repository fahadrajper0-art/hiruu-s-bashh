let screens = document.querySelectorAll(".screen");
let current = 0;

function nextScreen() {
  screens[current].classList.remove("active");
  current++;
  if (current < screens.length) {
    screens[current].classList.add("active");
  }
}