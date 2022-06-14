let grow = document.getElementById("grow");
let shrink = document.getElementById("shrink");
let round = document.getElementById("round");
let box = document.getElementById("box");
let delay = document.getElementById("delay");
let scale = document.getElementById("scale");
let seconds = Number(delay.value) * 1000;

function increase() {
  setTimeout(() => {
    box.style.height = `${50 * scale.value}px`;
    box.style.width = `${50 * scale.value}px`;
  }, seconds);
}

function reset() {
  setTimeout(() => {
    box.style.height = "50px";
    box.style.weight = "50px";
  }, seconds);
  console.log("hey");
}

grow.addEventListener("click", (event) => {
  event.preventDefault();
  increase();
  //   reset();
});

function decrease() {
  setTimeout(() => {
    box.style.height = `${50 / scale.value}px`;
    box.style.width = `${50 / scale.value}px`;
  }, seconds);
}

shrink.addEventListener("click", (event) => {
  event.preventDefault();
  decrease();
});

function rounded() {
  setTimeout(() => {
    box.style.borderRadius = `${scale.value}px`;
  }, seconds);
}

round.addEventListener("click", (event) => {
  event.preventDefault();
  rounded();
  reset();
});
