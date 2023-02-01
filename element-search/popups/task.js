const modalMain = window.modal_main;
const modalSuccess = window.modal_success;
modalMain.className = 'modal modal_active';

const modalClose = document.getElementsByClassName('modal__close');
const showSuccess = document.getElementsByClassName('show-success');

console.log(showSuccess);
console.log(modalClose);

for (let index in modalClose) {
  modalClose.item(index).onclick = () => {
    modalMain.className = 'modal';      modalSuccess.className = 'modal';
    if (modalClose.item(index) === showSuccess.item(0)) {
      modalSuccess.className = 'modal modal_active';
    }
  };
}
