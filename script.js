

const active = document.getElementById('active');
const ContainerCart = document.querySelector(".Cart-container");
const CheckoutContainer = document.querySelector(".Checkout-container");

const ProductBtn = document.querySelectorAll('.p-btn');
const checkout = document.getElementById('checkout-btn')
const subTotal = document.getElementById('sub-total');


ProductBtn.forEach(Add);



function Add(btn) {
    btn.addEventListener('click', function () {
        AddToCart(btn);
    });
}


active.addEventListener('click', () => {
    if (CheckoutContainer.style.display == "none" || ContainerCart.style.display == "none" || checkout.style.display=="none") {
        CheckoutContainer.style.display = "block";
        ContainerCart.style.display = "block"
        checkout.style.display="block"
    }else{
        CheckoutContainer.style.display="none";
    }
})





let Subtotal = 0;


function AddToCart(btn) {
    const product = btn.closest('.product');
    const prices = product.querySelector('#price').innerText;
    const price = prices.substring(1, prices.length)
    const Quantity = product.querySelector('.qty').value;
    const Pname = product.querySelector('h4').innerHTML;


    Subtotal += (Quantity * price);

    subTotal.textContent = `Subtotal: ${Subtotal}`;
    Added(Quantity, price, Pname);
}



function Added(Quantity, price, Pname) {
    const cart = document.querySelector('tbody');
    const div = document.createElement('div');
    cart.appendChild(div)

    const cartItem = document.createElement('tr');
    cartItem.classList.add('cart-item');

    cartItem.innerHTML = `
    <td>${Pname}</td>
    <td>${Quantity}</td>
    <td>${price}</td>
    <td>${Quantity * price}</td>
    `;
    div.appendChild(cartItem);

}

checkout.addEventListener('click', () => {
    const cart = document.querySelector('tbody');
    
    const cartItem = document.querySelector('.cart-item');
    if(cartItem !=null){
        cart.innerHTML="";
        Subtotal=0;
        subTotal.textContent = `Subtotal: ${Subtotal}`;
    }
    

    setTimeout(() => {
        checkout.style.display="none"
        CheckoutContainer.style.display = "none";
        
    }, 2000);

    
   
})





