const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const qtyDOM = document.querySelector(".qty");
const cartDOM = document.querySelector(".cart-product");
const checkoutBtn = document.querySelector(".checkout-btn");
const cartItemsSpan = document.querySelector(".cart-items");

const productInCart = {
  id: 1234567,
  title: "Fall Limited Edition Sneakers",
  price: 125,
  qty: 1,
};

const Storage = (function () {
  const saveProduct = function () {
    return localStorage.setItem("productInCart", JSON.stringify(productInCart));
  };

  const getProduct = function () {
    JSON.parse(localStorage.getItem("productInCart"));
  };

  const saveCartNumber = function () {
    let cartNumber = productInCart.qty;
    localStorage.setItem("cartNumber", cartNumber);
  };

  const getCartNumber = function () {
    JSON.parse(localStorage.getItem("cartNumber"));
  };

  return { saveProduct, getProduct, saveCartNumber, getCartNumber };
})();

const App = (function () {
  const manageQty = function () {
    increment.addEventListener("click", () => {
      let qty = Storage.getProduct().qty;
      qty = parseInt(qty);

      qtyDOM.innerText += 1;
    });
  };
})();

Storage.saveProduct();
Storage.saveCartNumber();
