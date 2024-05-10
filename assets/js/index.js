let btnEnter = document.getElementById("enter");
let btnAgree = document.getElementById("agree");
let btnDisagree = document.getElementById("disagree");
let wrapperAltushka = document.querySelector(".wrapper-altushka");
let wrapperPovestka = document.querySelector(".wrapper-povestka");
let inputList = document.querySelectorAll(".input-text");
let povestkaText = document.querySelectorAll(".povestka-text");
// функция для рандомного числа
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

btnEnter.onclick = () => {
  if (inputList[0].value != "" && inputList[1].value != "") {
    wrapperAltushka.style.display = "flex";
  } else {
    inputList[0].style.borderColor = "red";
    inputList[1].style.borderColor = "red";
    setTimeout(() => {
      inputList[0].style.borderColor = "var(--border-color)";
      inputList[1].style.borderColor = "var(--border-color)";
    }, 4000);
  }
};

btnAgree.onclick = () => {
  wrapperAltushka.style.display = "none";
  wrapperPovestka.style.display = "flex";
  povestkaText[0].innerText = inputList[0].value;
  povestkaText[1].innerText = inputList[1].value;
};

btnDisagree.addEventListener("mouseenter", () => {
  btnDisagree.style.position = "absolute";
  btnDisagree.style.top = random(0, window.innerHeight) + "px";
  btnDisagree.style.right = random(0, window.innerWidth) + "px";
});
