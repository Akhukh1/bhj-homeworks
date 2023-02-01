const sliderArrow = document.querySelectorAll('.slider__arrow');
const sliderItem = document.querySelectorAll('.slider__item');
const sliderDot = document.querySelectorAll('.slider__dot');


let showSlideNumber = 0;
const showSlidLength = sliderItem.length;

for (let index = 0; index < sliderArrow.length; index++) {

  sliderArrow.item(index).onclick = () => {
    sliderItem.item(showSlideNumber).className = 'slider__item';
    sliderDot.item(showSlideNumber).className = 'slider__dot';
  
    if (sliderArrow.item(index).className === 'slider__arrow slider__arrow_next') {
  
      showSlideNumber ++;
      if (showSlideNumber > showSlidLength - 1) {
        showSlideNumber = 0;
      }

      sliderItem.item(showSlideNumber).className = 'slider__item slider__item_active';
      sliderDot.item(showSlideNumber).className = 'slider__dot slider__dot_active';
  
    } else if (sliderArrow.item(index).className === 'slider__arrow slider__arrow_prev') {
  
      showSlideNumber--;
      if (showSlideNumber < 0) {
        showSlideNumber = showSlidLength - 1;
      }
  
      sliderItem.item(showSlideNumber).className = 'slider__item slider__item_active';
      sliderDot.item(showSlideNumber).className = 'slider__dot slider__dot_active';
  
    }
  } ;

}

