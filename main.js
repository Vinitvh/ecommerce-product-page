const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const qtyDOM = document.querySelector(".qty");
const cartDOM = document.querySelector(".cart-product");
const checkoutBtn = document.querySelector(".checkout-btn");
const cartSpan = document.querySelector(".cart-items");

const APP = (function () {
  const manageQty = function () {
    increment.addEventListener("click", (e) => {
      e.preventDefault();
      qtyDOM.innerText = parseInt(qtyDOM.innerText) + 1;
    });

    decrement.addEventListener("click", (e) => {
      e.preventDefault();
      if (qtyDOM.innerText <= 0) {
        decrement.click = false;
      } else {
        qtyDOM.innerText = parseInt(qtyDOM.innerText) - 1;
      }
    });
  };

  const displayCart = function () {
    const qty = JSON.parse(localStorage.getItem("Qty"));
    const total = JSON.parse(localStorage.getItem("Total"));

    if (cartDOM.innerHTML === "") {
      cartDOM.innerHTML = "Add Product To The Cart";
    } else {
      cartDOM.innerHTML = `
        <img src="/images/image-product-1-thumbnail.jpg" alt="product-1" />
          <div class="cart-info">
            <h6>fall limited edition sneakers</h6>
            <p>
              $125.00 x ${qty}
              <span>$${total}</span>
            </p>
          </div>
          <div class="delete-icon">
            <img src="/images/icon-delete.svg" alt="delete" />
          </div>
        `;
      checkoutBtn.innerHTML = `<a href="#">Checkout</a>`;
    }
  };

  const setTotal = function () {
    let getQty = localStorage.getItem("Qty");
    getQty = JSON.parse(getQty);
    if (getQty !== 0) {
      let total = getQty * 125;
      localStorage.setItem("Total", JSON.stringify(total));
    } else {
      localStorage.setItem("Total", JSON.stringify(0));
    }
  };

  const addToCart = function () {
    const addCartBtn = document.querySelector(".cart-btn");

    addCartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let qtyValue = qtyDOM.textContent;
      qtyValue = parseInt(qtyValue);
      if (qtyValue === 0) {
        addCartBtn.click = false;
        localStorage.setItem("Qty", JSON.stringify(0));
        localStorage.setItem("Total", JSON.stringify(0));
        console.log(false);
      } else {
        localStorage.setItem("Qty", JSON.stringify(qtyValue));
        setTotal();
        displayCart();
        cartValue();
      }
    });
  };

  const cartValue = function () {
    let qty = localStorage.getItem("Qty");
    qty = JSON.parse(qty);

    if (qty === 0) cartSpan.textContent = 0;
    cartSpan.textContent = qty;
  };

  return { manageQty, addToCart, displayCart, cartValue };
})();

APP.manageQty();
APP.addToCart();
APP.displayCart();
APP.cartValue();
