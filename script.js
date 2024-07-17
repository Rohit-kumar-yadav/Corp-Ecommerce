
import checkout from "./cart.js";

// const Cart = document.querySelector(".Cart-container");

const ProductBtn = document.querySelectorAll('.p-btn');

ProductBtn.forEach(Add);

function Add(btn) {
    btn.addEventListener('click', function () {
        AddToCart(btn);
    });
}

function AddToCart(btn) {
    const product = btn.closest('.product');
    const price = product.querySelector('#price').innerText;
    const Quantity = product.querySelector('.qty').value;
    console.log("Added to cart!");
    console.log("Quantity: ", Quantity);
    console.log("Price: ", price);

    checkout(Quantity, price);
}



