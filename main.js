document.getElementById("purple").onclick = partyPurple;
document.getElementById("green").onclick = partyGreen;
document.getElementById("blue").onclick = partyBlue;
document.getElementById("red").onclick = partyRed;
document.getElementById("black").onclick = partyBlack;
document.getElementById("yellow").onclick = partyYellow;

function partyPurple() {
  document.querySelector("body").style.backgroundColor = "rgba(241,63,247,1)";
  document.querySelector("body").style.color = "white";
}

function partyGreen() {
  document.querySelector("body").style.backgroundColor = "rgba(0,253,81,1)";
  document.querySelector("body").style.color = "white";
}

function partyBlue() {
  document.querySelector("body").style.backgroundColor = "rgba(0,254,255)";
  document.querySelector("body").style.color = "white";
}

function partyRed() {
  document.querySelector("body").style.backgroundColor =
    "rgba(255, 0, 0, 0.79)";
  document.querySelector("body").style.color = "white";
}
function partyBlack() {
  document.querySelector("body").style.backgroundColor = "rgba(9,9,9)";
  document.querySelector("body").style.color = "white";
}
function partyYellow() {
  document.querySelector("body").style.backgroundColor = "rgba(255, 234, 0)";
  document.querySelector("body").style.color = "white";
}
function partyOrange() {
  document.querySelector("body").style.backgroundColor = "rgba(255,165,0)";
  document.querySelector("body").style.color = "white";
}
