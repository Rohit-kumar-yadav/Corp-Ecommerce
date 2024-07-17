// Initialize

const ProductBtn = document.querySelectorAll('.p-btn')
const Quantity = document.querySelector('.qty').value;
let Price = document.querySelectorAll('#price');
const Product = document.querySelectorAll(".product");


ProductBtn.forEach(Add);
// Product.forEach();

// function Products(p){
//     console.log(p);
// }

function Add(btn){
    btn.addEventListener('click',AddToCart);
}
   
Price.forEach((p)=>{
    console.log(Price[p].innerHTML);
})

function AddToCart(){
    console.log(Quantity);
}