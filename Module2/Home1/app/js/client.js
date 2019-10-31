const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const toDelivery = document.getElementById('toDelivery')
const toCart = document.getElementById('toCart')

const orderInfo = JSON.parse(localStorage.getItem('orderInfo')) ?
    JSON.parse(localStorage.getItem('orderInfo')) : [];


fullName.addEventListener('input', (e) => {
    orderInfo.fullName = e.target.value;
})

email.addEventListener('input', (e) => {
    orderInfo.email = e.target.value;
})

phone.addEventListener('input', (e) => {
    orderInfo.tel = e.target.value;
})

toDelivery.addEventListener('click', (e) => {
    localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
    window.open('delivery.html', '_self');
})

toCart.addEventListener('click', (e) => {
    window.open('cart.html', '_self');
})