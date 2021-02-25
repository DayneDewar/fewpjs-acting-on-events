const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    let numberLeft = dodger.style.left.replace('px', '');
    let left = parseInt(numberLeft, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let numberLeft = dodger.style.left.replace('px', '');
    let left = parseInt(numberLeft, 10);

    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft();
    } 
    else if (event.key === 'ArrowRight') {
        moveDodgerRight();
    } 
})