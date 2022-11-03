
const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");

startButton.addEventListener("click", onStartButtonClik);
stopButton.addEventListener("click", onStopButtonClik);

let intervalID = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function onStartButtonClik() {

    intervalID = setInterval(() => {

         document.body.style.backgroundColor = getRandomHexColor();
     }, 1000);
     
};

function onStopButtonClik() {
    clearInterval(intervalID);
    };

