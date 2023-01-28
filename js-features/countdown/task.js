// const currentTime = function() {
//   const initialTime = document.getElementById("timer");
//   let countTime = Number(initialTime.textContent);
//   countTime = countTime - 1;
//   initialTime.textContent = countTime;
//   if (countTime < 0) {
//     alert('Вы победили в конкурсе!');
//     return;
//   }
// }

// setInterval(currentTime, 1000);

function convertTime(countTime) {

  let hours = Math.floor(countTime / 60 / 60);
  let minutes = Math.floor(countTime / 60) - (hours * 60);
  let seconds = countTime % 60;

  let stringTime = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ].join(':');

  // console.log(stringTime);
  return stringTime;

}

const currentTime = function() {
  const initialTime = document.getElementById("timer");
  let countTime = initialTime.textContent;
  if (!isNaN(countTime)) {
    countTime = countTime;
  } else {
    let arrTime = countTime.split(':');
    countTime = Number(arrTime[0]) * 3600 + Number(arrTime[1]) * 60 + Number(arrTime[2])
  }
  countTime = countTime - 1;
  initialTime.textContent = convertTime(countTime);
  if (countTime < 0) {
    alert('Вы победили в конкурсе!');
    return;
  }
}

setInterval(currentTime, 1000);

// function convertTime(countTime) {

//   let hours = Math.floor(countTime / 60 / 60);
//   let minutes = Math.floor(countTime / 60) - (hours * 60);
//   let seconds = countTime % 60;

//   let stringTime = [
//     hours.toString().padStart(2, '0'),
//     minutes.toString().padStart(2, '0'),
//     seconds.toString().padStart(2, '0')
//   ].join(':');

//   // console.log(stringTime);
//   return stringTime;

// }

// const currentTime = function() {
//   const initialTime = document.getElementById("timer");
//   let countTime = initialTime.textContent;
//   if (!isNaN(countTime)) {
//     countTime = countTime;
//   } else {
//     let arrTime = countTime.split(':');
//     countTime = Number(arrTime[0]) * 3600 + Number(arrTime[1]) * 60 + Number(arrTime[2])
//   }
//   countTime = countTime - 1;
//   initialTime.textContent = convertTime(countTime);
//   if (countTime < 0) {
//     let link = document.createElement('a');
//     link.href = "C:/Users/akeks/Desktop/bhj-homeworks/js-features/countdown";
//     link.download = 111.111;
//     // link.target="_blank";
//     link.click();
//   }
// }

// setInterval(currentTime, 1000);
