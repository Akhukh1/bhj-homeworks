const rotator = [...document.querySelectorAll('.rotator')];

// for (let i in rotator) {

//   let rotatorCase = [...rotator[i].querySelectorAll('.rotator__case')];

//   setInterval(() => {

//     let indexShowCase = rotatorCase.findIndex((number, index, arr) => arr[index].classList.contains('rotator__case_active') === true);

//     rotatorCase[indexShowCase].classList.remove('rotator__case_active');
  
//     indexShowCase ++;
    
//     if (indexShowCase > rotatorCase.length - 1) {
//       indexShowCase = 0
//     }
  
//     rotatorCase[indexShowCase].classList.add('rotator__case_active');

//   }, 1000);

// }

function changeCase(rotatorCase) {

  let indexShowCase = rotatorCase.findIndex((number, index, arr) => arr[index].classList.contains('rotator__case_active') === true);
  
  setInterval( () => {
 
    let indexShowCaseOld = indexShowCase;

    indexShowCase ++;
      
    if (indexShowCase > rotatorCase.length - 1) {
      indexShowCase = 0
    }
      
    rotatorCase[indexShowCaseOld].classList.remove('rotator__case_active');
    rotatorCase[indexShowCase].classList.add('rotator__case_active');
    rotatorCase[indexShowCase].style.color = rotatorCase[indexShowCase].dataset.color;

  }, rotatorCase[indexShowCase].dataset.speed);

}

for (let i in rotator) {

  let rotatorCase = [...rotator[i].querySelectorAll('.rotator__case')];

  changeCase(rotatorCase);

}











