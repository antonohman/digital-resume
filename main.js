
// FIND NUMBER FOR stroke-dasharray AND stroke-dashoffset */

/* const logoBorder = document.querySelectorAll(".sonyvegasLogoBorder rect");

for (let i = 0; i<logoBorder.length; i++) {
    console.log(`Letter ${i} is ${logoBorder[i].getTotalLength()}`);
} */

// BACK TO THE TOP-BUTTON

let mybutton = document.getElementById("topButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// CLOCK

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML =
  h + ":" + m + ":" + s;
  let t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

// CHANGE BACKGROUND-COLOR BUTTON

let color = ["repeat linear-gradient(#ee7752, #e73c7e, #23a6d5, #23d5ab, #ee7752)",
"repeat linear-gradient(#119200, #13fff3, #d600ba, #ff9e78)",
"repeat linear-gradient(black, #972b00, #23a6d5, #f94dff, #ffe606)",
"repeat linear-gradient(#616161, #0400f5, #006d6d, #972b00)",
"repeat linear-gradient(#f94dff, #00d0f5, #02c463, #ffe606)"];

let i = 0;

document.getElementById("changeBackground").addEventListener("click", function(){
  i = i < color.length ? ++i : 0;
  document.querySelector("body").style.background = color[i]
})