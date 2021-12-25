const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const qtyDOM = document.querySelector(".qty");
const cartDOM = document.querySelector(".cart-product");
const cartBtn = document.querySelector(".cart-btn");
const checkoutBtn = document.querySelector(".checkout-btn");
const cartItemsSpan = document.querySelector(".cart-items");
const emptyCart = document.querySelector(".empty-cart");

// Lightbox

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}

// const productInCart = {
//   id: 1234567,
//   title: "Fall Limited Edition Sneakers",
//   price: 125,
//   qty: 1,
// };

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

  const addCart = function () {
    cartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      setCartNumber();
      displayCart();
    });
  };

  const displayCart = function () {
    let qty = qtyDOM.innerText;
    if (qty >= 1) {
      cartDOM.classList.remove("empty-cart");
      cartDOM.innerHTML = ` 
      <img src="/images/image-product-1-thumbnail.jpg" alt="product-1" />
        <div class="cart-info">
          <h6>fall limited edition sneakers</h6>
          <p>
            $125.00 x ${parseInt(qty)}
            <span>$${qty * 125}</span>
          </p>
        </div>
        <div class="delete-icon">
          <img
            src="/images/icon-delete.svg"
            alt="delete"
            class="delete-btn"
          />
        </div>
      `;
      checkoutBtn.innerHTML = `<a href="#">Checkout</a>`;
    } else if (qty <= 0) {
      cartDOM.innerHTML = "Add product to the cart";
      cartDOM.classList.add("empty-cart");
      checkoutBtn.innerHTML = "";
    } else {
      cartDOM.innerHTML = "Add product to the cart";
      cartDOM.classList.add("empty-cart");
      checkoutBtn.innerHTML = "";
    }

    removeCart();
  };

  const removeCart = function () {
    const deleteBtn = document.querySelector(".delete-icon");

    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const element = deleteBtn.parentElement;
      element.remove();
      checkoutBtn.innerHTML = "";
      localStorage.setItem("cartNumber", 0);
      setCartNumber();
      qtyDOM.innerText = 0;
      displayCart();
    });
  };

  return { manageQty, setCartNumber, addCart, displayCart };
})();

App.manageQty();
App.setCartNumber();
App.addCart();
App.displayCart();
