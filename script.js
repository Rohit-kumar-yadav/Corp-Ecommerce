
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

function checkout(Quantity, price) {
    const cart = document.querySelector('.Cart-container');
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
    <h4>Price: $${price}</h4>
    <h4>Quantity: ${Quantity}</h4>
    `;
    cart.appendChild(cartItem);
}
