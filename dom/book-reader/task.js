const fontSize = [...document.querySelectorAll('.font-size')];
const bookContent = document.querySelector('.book');


for (let i in fontSize) {

  fontSize[i].onclick = () => {

    let fontSizeActiveIndex = fontSize.findIndex((number, index, arr) => arr[index].classList.contains('font-size_active') === true);

    fontSize[fontSizeActiveIndex].classList.remove('font-size_active');
    fontSize[i].classList.add('font-size_active');

    if (bookContent.classList.contains('font-size_small') ||
    bookContent.classList.contains('font-size_big')) {
      bookContent.classList.remove('font-size_small');
      bookContent.classList.remove('font-size_big');
    }

    if (fontSize[i].classList.contains('font-size_small')) {
      bookContent.classList.add('font-size_small');
    } else if (fontSize[i].classList.contains('font-size_big')) {
      bookContent.classList.add('font-size_big');
    }

    return false;
  }

}

const color = [...document.querySelectorAll('.color')];

const colorText = color.filter((value, index, arr) => arr[index].hasAttribute('data-text-color') === true)
const colorBg = color.filter((value, index, arr) => arr[index].hasAttribute('data-bg-color') === true)

console.log(colorText)

for (let i in colorText) {

  colorText[i].onclick = () => {

    console.log(colorText)

    

    let colorTextActiveIndex = colorText.findIndex((number, index, arr) => arr[index].classList.contains('color_active') === true);

    console.log(colorTextActiveIndex);
    console.log(colorText[colorTextActiveIndex]);

    colorText[colorTextActiveIndex].classList.remove('color_active');
    colorText[i].classList.add('color_active');

    console.log(bookContent);

    if (bookContent.classList.contains('book_color-gray') ||
    bookContent.classList.contains('book_color-whitesmoke') ||
    bookContent.classList.contains('book_color-black')) {

      bookContent.classList.remove('book_color-gray');
      bookContent.classList.remove('book_color-whitesmoke');
      bookContent.classList.remove('book_color-black');

    }

    bookContent.classList.add('book_color-' + colorText[i].dataset.textColor);

    return false;
  }

}

for (let i in colorBg) {

  colorBg[i].onclick = () => {

    let colorTextActiveIndex = colorBg.findIndex((number, index, arr) => arr[index].classList.contains('color_active') === true);

    colorBg[colorTextActiveIndex].classList.remove('color_active');
    colorBg[i].classList.add('color_active');


    bookContent.classList.remove('book_bg-gray');
    bookContent.classList.remove('book_bg-black');
    bookContent.classList.remove('book_bg-white');

    bookContent.classList.add('book_bg-' + colorBg[i].dataset.bgColor);

    return false;

  }
}






