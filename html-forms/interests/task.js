const interestCheck = [...document.querySelectorAll('.interest__check')];

for (let i in interestCheck) {

  interestCheck[i].addEventListener('change', () => {

    const interestSub = [...interestCheck[i].closest('.interest').querySelectorAll('.interests > .interest')];

    const interestUpCheck = [...interestCheck[i].closest('.interests').querySelectorAll('.interest__check')];

    const interestSubCheck = interestUpCheck.filter(check => check.checked === true);

    const interestUp = interestCheck[i].closest('.interests').closest('.interest');

    if (interestUp !== null) {

      const interestUpUp = interestCheck[i].closest('.interests').closest('.interests').querySelector('.interest__check');
      const interestUpArr = [...interestCheck[i].closest('.interests').closest('.interests').querySelectorAll('.interest__check')];
      const interestUpUpArr =  interestUpArr.filter(check => check.checked === true);
  
    }

    if (interestUp === null) {


    } else if (interestUpCheck.length === interestSubCheck.length) {

      interestUp.querySelector('.interest__check').indeterminate = false;
      interestUp.querySelector('.interest__check').checked = true;

    } else {

      if (interestSubCheck.length === 0) {
        interestUp.querySelector('.interest__check').indeterminate = false;
        interestUp.querySelector('.interest__check').checked = false;
      } else {
        interestUp.querySelector('.interest__check').checked = false;
        interestUp.querySelector('.interest__check').indeterminate = true;
      }

    }

    if (interestCheck[i].checked) {

      for (let j = 0; j < interestSub.length; j++) {
        interestSub[j].querySelector('.interest__check').checked = true;
      }     

    } else {

      for (let j = 0; j < interestSub.length; j++) {
        interestSub[j].querySelector('.interest__check').checked = false;
      }

    }

  });

}