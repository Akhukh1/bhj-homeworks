function loaderDone() {
  const loaderActive = document.querySelector('.loader');
  loaderActive.classList.remove('loader_active');
}

function responseProcessing(exchangeRatesObj) {

  const exchangeRates = JSON.parse(exchangeRatesObj).response.Valute;
  const items = document.getElementById('items');

  for (let i in exchangeRates) {
    let usd = 'USD';
    items.innerHTML += 
    '<div class="item">' +
      '<div class="item__code">' +
        exchangeRates[i].CharCode +
      '</div>' +
      '<div class="item__value">' +
        exchangeRates[i].Value +
      '</div>' +
      '<div class="item__currency">' +
            'руб.' +
      '</div>' +
    '</div>';
  }
}

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    loaderDone();
    let exchangeRatesObj = xhr.responseText;
    responseProcessing(exchangeRatesObj);
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();