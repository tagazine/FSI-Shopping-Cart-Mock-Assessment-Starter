function changeQuantity (display) {
    let quantity = document.querySelector9('.total-quantity')
    quantity.innerHTML = display
}

let quantity = 1

let quantDown = document.querySelector('#quantity-down')
let quantUp = document.querySelector('#quantity-up')

quantDown.addEventListener('click', function(){
    if (quantity > 0) {
        quantity--
    }
    changeQuantity('Quantity: $[quantity}')
})

quantUp.addEventListener('click', function(){
    quantity++
    changeQuantity('Quantity: $[quantity}')
})