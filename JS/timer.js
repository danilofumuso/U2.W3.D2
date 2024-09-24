let counter = 0;

const counterProgress = () => {
  counter++;
};

let timer = setInterval(counterProgress(), 1000);

sessionStorage.setItem("timer", timer);

const timeFlowing = document.getElementById(seconds);

timeFlowing.innerText = parseInt(sessionStorage.getItem("timer"));
