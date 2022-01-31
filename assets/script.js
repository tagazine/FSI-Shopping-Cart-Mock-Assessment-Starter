function changeQuantity (display) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = display
}

let quantity = 1

const quantDown = document.querySelector('#quantity-down')
const quantUp = document.querySelector('#quantity-up')

quantDown.addEventListener('click', function(){
    if (quantity > 0) {
        quantity--
    }
    changeQuantity('Quantity: ${quantity}')
})

quantUp.addEventListener('click', function(){
    quantity++
    changeQuantity('Quantity: ${quantity}')
})