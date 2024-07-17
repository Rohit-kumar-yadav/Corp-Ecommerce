// Initialize

const ProductBtn = document.querySelectorAll('.p-btn');
const Quantity = document.querySelector('.qty');
let Price = document.querySelector('#price'); // Get a single element with id "price"
const Product = document.querySelectorAll(".product");


ProductBtn.forEach(Add);

function Add(btn) {
    btn.addEventListener('click', AddToCart);
}


// Adding To Cart 
function AddToCart() {
    console.log("Added to cart!");
    console.log("Quantity: ", Quantity.value);
    console.log("Price: ", Price.innerText);
}

