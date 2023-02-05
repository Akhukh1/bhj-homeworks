const menuSub = [...document.querySelectorAll('.menu_sub')];

for (let index in menuSub) {

  let menuSubUrl = menuSub[index].closest('.menu__item');

  menuSubUrl.onclick = () => {

    if (menuSub[index].classList.contains('menu_active')) {
      menuSub[index].classList.remove('menu_active');
    } else {
      for (let i in menuSub) {
        if (menuSub[i].classList.contains('menu_active')) {
          menuSub[i].classList.remove('menu_active');
        }
      }
      menuSub[index].classList.add('menu_active');
    }

    return false;
  }
  
}


