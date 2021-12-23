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

const App = (function () {
  const manageQty = function () {
    increment.addEventListener("click", () => {
      let qty = parseInt(qtyDOM.innerText);
      qtyDOM.innerText = qty + 1;
      localStorage.setItem("cartNumber", JSON.stringify(qty + 1));
      setCartNumber();
    });

    decrement.addEventListener("click", () => {
      let qty = parseInt(qtyDOM.innerText);
      if (qty <= 0) {
        decrement.click = false;
      } else {
        qtyDOM.innerText = qty - 1;
        localStorage.setItem("cartNumber", JSON.stringify(qty - 1));
        setCartNumber();
      }
    });
  };

  const setCartNumber = function () {
    let cartNumber = JSON.parse(localStorage.getItem("cartNumber"));
    cartItemsSpan.innerText = cartNumber;
  };

  return { manageQty, setCartNumber };
})();

App.manageQty();
App.setCartNumber();
