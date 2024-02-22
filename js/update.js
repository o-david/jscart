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