const delOrder = document.getElementById('delOrder');
const delCustomer = document.getElementById('delCustomer'); 
const delOrg = document.getElementById('delOrg');
const delCity = document.getElementById('delCity');
const delStreet = document.getElementById('delStreet');
const delHouse = document.getElementById('delHouse'); 
const delIndex = document.getElementById('delIndex'); 



delCustomer.onclick = function (e) {
  history.back();
}

const orderInfo = JSON.parse(localStorage.getItem('orderInfo')) ?
  JSON.parse(localStorage.getItem('orderInfo')) : [];

deliverySelect.addEventListener('change', (e) => {
  orderInfo.typeOfDelivery = e.target.value;
})

delOrg.addEventListener('input', (e) => {
  orderInfo.delivery.organization = e.target.value;
})

delCity.addEventListener('input', (e) => {
  orderInfo.delivery.city = e.target.value;
})

delStreet.addEventListener('input', (e) => {
  orderInfo.delivery.street = e.target.value;
})

delHouse.addEventListener('input', (e) => {
  orderInfo.delivery.house = e.target.value;
})

delIndex.addEventListener('input', (e) => {
    orderInfo.delivery.index = e.target.value;
  })

delOrder.addEventListener('click', (e) => {
  localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
  window.open('head-order.html', '_self');
})