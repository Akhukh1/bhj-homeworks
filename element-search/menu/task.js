const menuSub = [...document.querySelectorAll('.menu_sub')];

for (let index in menuSub) {

  let menuSubActiv = menuSub[index].closest('.menu__item');
  let menuSubURL = menuSubActiv.querySelector('a');

  menuSubURL.onclick = () => {

    if (menuSub[index].classList.contains('menu_active')) {
      menuSub[index].classList.remove('menu_active');
      return false;
    } else {
      for (let i in menuSub) {
        if (menuSub[i].classList.contains('menu_active')) {
          menuSub[i].classList.remove('menu_active');
        }
      }
      menuSub[index].classList.add('menu_active');
      return false;
    }

  }
  
}


