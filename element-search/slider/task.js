function prev() {

  let showSlideNumber = sliderItem.findIndex((number, index, arr) => arr[index].classList.contains('slider__item_active') === true);

  sliderItem[showSlideNumber].classList.remove('slider__item_active');
  sliderDot[showSlideNumber].classList.remove('slider__dot_active');

  showSlideNumber--;

  if (showSlideNumber < 0) {
    showSlideNumber = sliderItem.length - 1;
  }

  sliderItem[showSlideNumber].classList.add('slider__item_active');
  sliderDot[showSlideNumber].classList.add('slider__dot_active');

}

function next() {

  let showSlideNumber = sliderItem.findIndex((number, index, arr) => arr[index].classList.contains('slider__item_active') === true);

  sliderItem[showSlideNumber].classList.remove('slider__item_active');
  sliderDot[showSlideNumber].classList.remove('slider__dot_active');

  showSlideNumber++;

  if (showSlideNumber > sliderItem.length - 1) {
    showSlideNumber = 0;
  }

  sliderItem[showSlideNumber].classList.add('slider__item_active');
  sliderDot[showSlideNumber].classList.add('slider__dot_active');

}

const sliderItem = [...document.querySelectorAll('.slider__item')];
const sliderDot = [...document.querySelectorAll('.slider__dot')];

const prevBtn = document.querySelector('.slider__arrow_prev');
const nextBtn = document.querySelector('.slider__arrow_next');

prevBtn.onclick = prev;
nextBtn.onclick = next;

for (let i in sliderDot) {

  sliderDot[i].onclick = () => {

    let showSlideNumber = sliderItem.findIndex((number, index, arr) => arr[index].classList.contains('slider__item_active') === true);

    sliderItem[showSlideNumber].classList.remove('slider__item_active');
    sliderDot[showSlideNumber].classList.remove('slider__dot_active');

    sliderItem[i].classList.add('slider__item_active');
    sliderDot[i].classList.add('slider__dot_active');

  };

}