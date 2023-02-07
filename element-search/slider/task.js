function showSlide(numberSlide) {

  let showSlideNumber = sliderItem.findIndex((number, index, arr) => arr[index].classList.contains('slider__item_active') === true);

  sliderItem[showSlideNumber].classList.remove('slider__item_active');
  sliderDot[showSlideNumber].classList.remove('slider__dot_active');

  if (numberSlide > sliderItem.length - 1) {
    numberSlide = 0;
  }

  if (numberSlide < 0) {
    numberSlide = sliderItem.length - 1;
  }

  sliderItem[numberSlide].classList.add('slider__item_active');
  sliderDot[numberSlide].classList.add('slider__dot_active');

}

function prev() {

  let showSlideNumber = sliderItem.findIndex((number, index, arr) => arr[index].classList.contains('slider__item_active') === true);

  showSlideNumber--;

  showSlide(showSlideNumber);

}

function next() {

  let showSlideNumber = sliderItem.findIndex((number, index, arr) => arr[index].classList.contains('slider__item_active') === true);

  showSlideNumber++;

  showSlide(showSlideNumber)

}

const sliderItem = [...document.querySelectorAll('.slider__item')];
const sliderDot = [...document.querySelectorAll('.slider__dot')];

const prevBtn = document.querySelector('.slider__arrow_prev');
const nextBtn = document.querySelector('.slider__arrow_next');

prevBtn.onclick = prev;
nextBtn.onclick = next;

for (let i in sliderDot) {
  sliderDot[i].onclick = () => {
    showSlide(i);
  };
}