let cartcount = 0;
let total = 0;

document.querySelectorAll(".order-btn").forEach(order => {
    order.addEventListener('click', function () {
        const orderControls = this.nextElementSibling;
        orderControls.style.display = 'flex';
        this.style.display = 'none';

        const box = this.closest('.box');
        const priceElement = box.querySelector('.priceint');
        const price = parseInt(priceElement.textContent);

        const decreaseButton = orderControls.querySelector('.decrease');
        const increaseButton = orderControls.querySelector('.increase');
        const orderCountElement = orderControls.querySelector('.order-count');
        let itemCount = parseInt(orderCountElement.textContent);

        decreaseButton.addEventListener('click', function() {
            if (itemCount > 1) { // Prevent item count from going below 1
                itemCount--;
                orderCountElement.textContent = itemCount;
                cartcount--;
                total -= price;
                updatecart();
            }
        });

        increaseButton.addEventListener('click', function() {
            itemCount++;
            orderCountElement.textContent = itemCount;
            cartcount++;
            total += price;
            updatecart();
        });

        cartcount++;
        total += price;
        updatecart();
    });
});

function updatecart() {
    document.getElementById("cart").textContent = `Your Cart (${cartcount} items)`;
    document.getElementById("cart-total").textContent = `Total: $${total}`;
}
