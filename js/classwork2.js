let screen = document.getElementById('.display-txt')
let nums = document.querySelectorAll('.nums')

nums.forEach(num =>{
    num.addEventListener(onclick, clicker(num.innerHTML))
})

function clicker(params) {
    
}