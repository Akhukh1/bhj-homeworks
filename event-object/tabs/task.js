const tab = [...document.querySelectorAll('.tab')];
const tabContent = [...document.querySelectorAll('.tab__content')];

for (let i in tab) {

  tab[i].onclick =() => {

    let tabActive = tab.findIndex((number, index, arr) => arr[index].classList.contains('tab_active') === true);

    tab[tabActive].classList.remove('tab_active');
    tabContent[tabActive].classList.remove('tab__content_active');

    tab[i].classList.add('tab_active');
    tabContent[i].classList.add('tab__content_active');

  }
}
