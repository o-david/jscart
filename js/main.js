// let item = document.querySelectorAll('.item')

// console.log(item)

function add(num) {
    let quamtity= document.getElementById(`qty${num}`)
    let total= document.getElementById(`total${num}`)
    let price= document.getElementById(`price${num}`)
    quamtity.innerHTML = parseInt(quamtity.innerHTML) + 1
    total.innerHTML = `$${parseInt(quamtity.innerHTML) * parseInt(price.innerHTML)}`
}

function sub(num) {
    let quamtity= document.getElementById(`qty${num}`)
    let total= document.getElementById(`total${num}`)
    let price= document.getElementById(`price${num}`)
    quamtity.innerHTML = parseInt(quamtity.innerHTML) - 1
    total.innerHTML = `$${parseInt(quamtity.innerHTML) * parseInt(price.innerHTML)}`
}   

function total() {
    let 
    
}