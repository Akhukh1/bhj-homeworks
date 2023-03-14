function addProductCart(index, productQuantityValue) {

  cartProducts.innerHTML += `
    <div class="cart__product" data-id="1">
      <img class="cart__product-image" src="image.png">
      <div class="cart__product-count">20</div>
    </div>
   `;

  const productId = product[index].getAttribute('data-id');
  const productImg = product[index].querySelector('img').getAttribute('src');

  const productCart = [...cartProducts.querySelectorAll('.cart__product')];

  productCart[productCart.length - 1].dataset.id = productId;
  productCart[productCart.length - 1].querySelector('img').setAttribute('src', productImg);
  productCart[productCart.length - 1].querySelector('.cart__product-count').textContent = productQuantityValue;

}

const product = [...document.querySelectorAll('.product')];
const cartProducts = document.querySelector('.cart__products');

for (let i in product) {

  const productQuantityControl = [...product[i].querySelectorAll('.product__quantity-control')];

  let productQuantity = product[i].querySelector('.product__quantity-value');
  let productQuantityValue = Number(productQuantity.textContent);

  const productAddKey = product[i].querySelector('.product__add');


  productQuantityControl[0].addEventListener('click', () => {
    productQuantityValue = productQuantityValue - 1;
    if (productQuantityValue < 1) {
      productQuantityValue = 1;
    }
    productQuantity.textContent = productQuantityValue;
  });

  productQuantityControl[1].addEventListener('click', () => {
    productQuantityValue = productQuantityValue + 1;
    productQuantity.textContent = productQuantityValue;
  });

  productAddKey.addEventListener('click', () => {

    let cartProduct = [...cartProducts.querySelectorAll('.cart__product')];
    
    if (cartProduct.length === 0) {
      addProductCart(i, productQuantityValue);
    } else {
      cartProduct = [...cartProducts.querySelectorAll('.cart__product')];
      let productIdIndex = cartProduct.findIndex((number, index, arr) => arr[index].getAttribute('data-id') === product[i].getAttribute('data-id'));
      if (productIdIndex < 0) {
        addProductCart(i, productQuantityValue);
      } else {
        let cartProductDataId = Number(cartProduct[productIdIndex].querySelector('.cart__product-count').textContent);
        console.log(cartProductDataId);
        console.log(productIdIndex);
        cartProduct[productIdIndex].querySelector('.cart__product-count').textContent = productQuantityValue + cartProductDataId;
      }
    }

  });

}

