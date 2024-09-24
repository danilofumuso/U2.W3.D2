let counter = sessionStorage.getItem("timer") || 0;

const timeFlowing = document.getElementById("seconds");

const counterProgress = () => {
  counter++;
  sessionStorage.setItem("timer", counter);
  timeFlowing.innerText = parseInt(sessionStorage.getItem("timer"));
};

let timer = setInterval(counterProgress, 1000);
