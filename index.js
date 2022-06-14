let grow = document.getElementById("grow");
let shrink = document.getElementById("shrink");
let round = document.getElementById("round");
let box = document.getElementById("box");
let scale = document.getElementById("scale").value;
let delay = document.getElementById("delay").value;

let ptag = document.getElementById("pt");

function increase() {
  setTimeout(() => {
    box.style.width = "200px";
    box.style.height = "200px";
    box.style.color = "red";
  }, 1000);
  console.log("check");
}

function callback() {
  return increase();
}

grow.addEventListener("click", increase());

// function shrinks() {
//   box.style.height = "50px";
//   box.style.width = "50px";
// }

// let sc = "42px";
// function rounds() {
//   let scale = document.getElementById("scale").value;
//   let scale1 = scale.concate("px");
//   document.getElementById("pt").innerHTML = scale1;
//   box.style.borderRadius = scale1;
// }

// shrink.addEventListener("click", function () {
//   shrinks();
// });

// round.addEventListener("click", function () {
//   rounds();
// });
