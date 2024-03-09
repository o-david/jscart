let sen = document.getElementById('pic')
let toptext = document.querySelector('.tex2')
console.log(sen)
console.log(toptext)

sen.onclick= cool
sen.addEventListener(onblur, cool())
function cool() {
    
    sen.setAttribute("src", "./res/logo.png")
    sen.setAttribute("width", "100px")
    toptext.innerHTML = `<img src="./res/work1.png" alt="">`
    toptext.style.color= "red"
}