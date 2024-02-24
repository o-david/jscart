let data = [
    {
        name: "School Bag",
        price: 10,
        quantity: 2,
    },
    {
        name: "Tennis Racket",
        price: 300,
        quantity: 4,
    },
    {
        name: "School Socks",
        price: 1,
        quantity: 1,
    }
]

function displayItems() {
    let cart =  document.querySelector('.cart')
    cart.innerHTML = data.map((item) =>{
        return`
        <div class="item">
        <h1>${item.name}</h1>
        <p>$<span class="price">${item.price}</span></p>
        <button class="inc">+</button>
        <span class="qty">${item.quantity}</span>
        <button class="dec">-</button>
        <p class="total"></p>
    </div>
        `
    })
    
}
displayItems()
let items = document.querySelectorAll('.item')

items.forEach(item => {
    const price = parseFloat(item.querySelector('.price').innerHTML)
    const inc = item.querySelector('.inc')
    const dec = item.querySelector('.dec')
    const total = item.querySelector('.total')
    const qty = item.querySelector('.qty')
    let quantity = parseInt(item.querySelector('.qty').innerHTML)
    
    inc.addEventListener("click", ()=>{
        quantity++
        console.log(quantity);
        console.log(price);
        qty.innerHTML = quantity
        total.innerHTML = `$${price*quantity}`
    })
    dec.addEventListener('click', ()=>{
        total.innerHTML = `$${price*quantity}`
    })
});

