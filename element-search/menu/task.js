const menuLink = document.querySelectorAll('.menu__link');
const menuItem = document.querySelectorAll('.menu__item');

let arrActiv = [];

for (let index in menuLink) {
  let menuActivUrl = menuItem.item(index).querySelector('.menu');

  if (menuActivUrl) {
    arrActiv.push(menuActivUrl);
  }

  let menuActiv = menuLink.item(index).closest('.menu__item');

  let menuActivParent = menuActiv.querySelector('.menu__item');

  menuLink.item(index).onclick = () => {

    if (menuActivParent.className) {

      for (let i in arrActiv) {
        arrActiv[i].className = 'menu menu_sub';
      }
     
      menuActivUrl.className = 'menu menu_sub menu_active';

      return false;
    }

  }
  
}