// Your code here
dodger =  document.getElementById('dodger');
function moveDodgerLeft() {
	let leftNumber = dodger.style.left.replace('px', '');
	let left = parseInt(leftNumber, 10);

    if (left > 0) 
   dodger.style.left = `${left - 15}px`
}

document.addEventListener('keydown', function(e){
    if (e.key === 'ArrowLeft' )
   moveDodgerLeft()
})

function moveDodgerRight(){
    let rightNumber = dodger.style.left.replace('px', '')
    let right = parseInt(rightNumber, 10)

    if (right < 360)
    dodger.style.left = `${right + 15}px`
}
document.addEventListener('keydown', function(e){
    if (e.key === 'ArrowRight')
    moveDodgerRight()
})
