function changeQuantity(quantDisplay) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = quantDisplay
}

let quantity = 1

const quantDown = document.querySelector('#quantity-down')
const quantUp = document.querySelector('#quantity-up')
const quantZero = document.querySelector(".remove")

quantDown.addEventListener('click', function(e){
    if (quantity > 0) {
        quantity--
    }
    changeQuantity(`Quantity: ${quantity}`)
})

quantUp.addEventListener('click', function(e){
    quantity++
    changeQuantity(`Quantity: ${quantity}`)
})

quantZero.addEventListener('click', function(e){
    quantity = 0
    changeQuantity(`Quantity: ${quantity}`)
})
