const dropdownLink = [...document.querySelectorAll('.dropdown__link')];
const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');

dropdownValue.onclick = () => {
  dropdownList.classList.add('dropdown__list_active');
}

for (let i in dropdownLink) { 
  dropdownLink[i].onclick = () => {
    dropdownValue.textContent = dropdownLink[i].textContent;
    dropdownList.classList.remove('dropdown__list_active');
    return false;
  }
}