
/* FIND NUMBER FOR stroke-dasharray AND stroke-dashoffset */

/* const logoBorder = document.querySelectorAll(".sonyvegasLogoBorder rect");

for (let i = 0; i<logoBorder.length; i++) {
    console.log(`Letter ${i} is ${logoBorder[i].getTotalLength()}`);
} */

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