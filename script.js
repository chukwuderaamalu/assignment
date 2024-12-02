let button = document.getElementById('bbn')

let balloon  = document.getElementById('vvs')









function sacVas () {
    if(button.innerText === "increase") {
        balloon.style.backgroundColor = "green"
        balloon.style.width = "350px"
        balloon.style.height = "350px"
        button.innerText = "deflate"
    }
else  {
    button.innerText ="increase"
    balloon.style.backgroundColor = "black"
    balloon.style.width = "50px"
    balloon.style.height = "50px"

};  
    
}