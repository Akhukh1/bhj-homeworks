let countClick = 0;
let conditionImage = false;

const image = document.getElementById("cookie");
const countClicker = document.getElementById("clicker__counter");
const averageCounter = document.getElementById("average__counter");
const startTime = new Date();

function changeSizes() {

  let endTime = new Date();
  countClick += 1;

  countClicker.textContent = countClick;
  let averageClick = 1000 * countClick / (endTime - startTime);
  averageCounter.textContent = averageClick.toFixed(2);

  if (conditionImage === false) {
    image.width = 300;
    conditionImage = true;
  } else {
    image.width = 200;
    conditionImage = false;
  }
  
};

image.onclick = changeSizes;