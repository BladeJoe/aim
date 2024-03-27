let target = document.querySelectorAll(".target")

function newPosition() {
    randH = Math.random()
    randV = Math.random()
    target[0].style.top = (randV*800)+"px"
    target[0].style.left = (randH*1800)+"px" 
    console.log(target[0].style.left); 
}