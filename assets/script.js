function changeQuantity(quantDisplay) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = quantDisplay
}

function changePrice(priceDisplay) {
    let price = document.querySelector('.total-price')
    price.innerHTML = priceDisplay
}

let quantity = 1
let price = 0.00

const quantDown = document.querySelector('#quantity-down')
const quantUp = document.querySelector('#quantity-up')
const quantZero = document.querySelector(".remove")

quantDown.addEventListener('click', function(e){
    if (quantity > 0) {
        quantity--
        
    }
    let price = 15.00 * quantity
    changeQuantity(`Quantity: ${quantity}`)
    changePrice(`Total Price: ${price}`)
})

quantUp.addEventListener('click', function(e){
    quantity++
    let price = 15.00 * quantity
    changeQuantity(`Quantity: ${quantity}`)
    changePrice(`Total Price: ${price}`)
})

quantZero.addEventListener('click', function(e){
    quantity = 0
    let price = 15.00 * quantity
    changeQuantity(`Quantity: ${quantity}`)
    changePrice(`Total Price: ${price}`)
})
