const noBtn = document.querySelector(".no");
const yesBtn = document.querySelector(".yes");
const area = document.querySelector(".button-area");

let activated = false;
let yesScale = 1;

function moveInside() {

  if (!activated) {
    noBtn.style.position = "absolute";
    noBtn.style.left = noBtn.offsetLeft + "px";
    noBtn.style.top = noBtn.offsetTop + "px";
    activated = true;
  }

  const areaWidth = area.clientWidth;
  const areaHeight = area.clientHeight;

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = areaWidth - btnWidth;
  const maxY = areaHeight - btnHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.left = newX + "px";
  noBtn.style.top = newY + "px";

  // Perbesar YES bertahap
  yesScale += 0.5;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Kalau YES udah gede banget → NO hilang
  if (yesScale >= 23) {
    noBtn.style.display = "none";
  }
}

// Desktop
noBtn.addEventListener("mouseenter", moveInside);

// Mobile
noBtn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  moveInside();
});

yesBtn.addEventListener("click", function () {
  window.location.href = "love.html"; 
});

