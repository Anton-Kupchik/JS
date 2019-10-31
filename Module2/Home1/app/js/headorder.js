const headOrder = document.getElementById('headOrder')
const headReadyBtn = document.getElementById('headreadyBtn')

const orderInfo = JSON.parse(localStorage.getItem('orderInfo')) ?
    JSON.parse(localStorage.getItem('orderInfo')) : [];


const totalCount = JSON.parse(localStorage.getItem('totalCount'))
const totalPrice = JSON.parse(localStorage.getItem('totalPrice'))

headreadyBtn.onclick = function (e) {
    history.back();
}

headOrder.innerHTML = `<h3>Общее количество: ${totalCount}</h3>
  <h3>Общая цена: ${totalPrice}</h3>
  <h3>Имя покупателя: ${orderInfo.fullName}</h3>
  <h3>Электронный адрес: ${orderInfo.email}</h3>
  <h3>Телефон: ${orderInfo.phone}</h3>
  <h3>Тип доставки: ${orderInfo.typeOfDelivery}</h3>
  <h3>Организация: ${orderInfo.delOrg}</h3>
  <h3>Адрес доставки: <br><br>
  <h3>Город  ${orderInfo.delCity}</h3>
  <h3>Улица  ${orderInfo.delStreet}</h3>
  <h3>Дом  ${orderInfo.delHouse}</h3>
  <h3>Индекс  ${orderInfo.delIndex}</h3>`