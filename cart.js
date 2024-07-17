
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

export default checkout;