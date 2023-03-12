const slide = document.getElementById("slide");
const up = document.getElementById("up");
const down = document.getElementById("down");

let y = 0;

up.addEventListener("click", (e) => {
  if (y > "-900") {
    y = y - 300;
    slide.style.top = y + "px";
  }
});
down.addEventListener("click", (e) => {
  if (y < 0) {
    y = y + 300;
    down.style.top = y + "px ";
  }
});
