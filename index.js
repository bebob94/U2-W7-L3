let myTimer = document.getElementById("timer");
let start = document.getElementById("start");
let counter = 0;

let counterValue = parseInt(sessionStorage.getItem("lastCounterValue")) || 0;

start.onclick = function () {
  const assignCounterToDOM = function () {
    myTimer.innerText = counterValue;
  };
  const increaseCounter = setInterval(function () {
    counterValue++;
    assignCounterToDOM();
    sessionStorage.setItem("lastCounterValue", counterValue);
  }, 1000);
};
