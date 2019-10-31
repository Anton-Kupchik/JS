const productsArr = JSON.parse(localStorage.getItem('productsArr')) ? 
JSON.parse(localStorage.getItem('productsArr')) : [] ; 
  const getPizza = (arr) => {
    let cont = document.getElementById('pizza-container');
    let pizzaInfo = "";
    arr.forEach(pizza => {
        pizzaInfo += ` <div id="${pizza.id}" class="main-inner col-12 col-md-6 col-lg-4">
            <div class="main-inner-img">
              <img src="images/${pizza.img}" alt="">
            </div>
            <div class="main-inner-name">
              <h3>${pizza.name}</h3>
            </div>
            <div class="main-inner-composition">
              <p><span>Состав:</span>${pizza.composition.join(', ')}</p>
            </div>
            <div class="main-inner-caloricity">
              <p><span>Калорийность(кКал/100гр):</span>${pizza.caloricity}</p>
            </div>
            <div class="main-inner-item">
              <div class="main-inner-price">
                <p>${pizza.price} грн</p>
              </div>
              <div class="main-inner-cart">
                <button onclick="cartClick(${pizza.id})" id="cart-btn"><i class="icon-basket"></i></button>
              </div>
           </div>
          </div>`

    });
    cont.innerHTML = pizzaInfo;
}

getPizza(pizzaList)

// поиск по названиям

  const pizzaContainer = document.getElementById('pizza-container');
  const input = document.getElementById('pricesearch');

  input.addEventListener('input', function(event) { 
    pizzaContainer.innerHTML = "";
    const value = event.target.value.toLowerCase().replace(' ', ''); 
    const findedPizzas = pizzaList.filter(pizza => { 
        return pizza.name.toLowerCase().replace(' ', '').includes(value) || 
        pizza.composition.find(compos => compos.toLowerCase().includes(value)) || 
        pizza.price.toString().includes(value); 
    }) 
    getPizza(findedPizzas); 
});

// сортировка по возрастанию и убыванию
let newPizza = [...pizzaList];

function pricedown() {
  pizzaContainer.innerHTML = "";
  let prDown = [...newPizza]
  prDown.sort((a,b) => {
          if(a.price>b.price) return -1;
          if(a.price<b.price) return 1;
          if(a.price==b.price) return 0;
  })
  getPizza(prDown)
  return prDown
}
function priceup() {
  pizzaContainer.innerHTML = "";
  let prUp = [...newPizza]
  prUp.sort((a,b) => {
          if(a.price>b.price) return 1;
          if(a.price<b.price) return -1;
          if(a.price==b.price) return 0;
  })
  getPizza(prUp)
  return prUp
}
const selectFirst = document.getElementById('select-inner');

selectFirst.addEventListener('click',function(event){
  if (event.target.value == 'priceup') {
    priceup()
  }
  if (event.target.value == 'pricedown') {
    pricedown()
  }
})


// сортировка по цене мин макс

const maxPrice = document.getElementById('pricemax');
const minPrice = document.getElementById('pricemin');
const btnPrice = document.getElementById('pricebtn');

let maxPriceVal = [];
let minPriceVal = [];

maxPrice.addEventListener('input', (e) => {
  console.log(maxPriceVal)
  if (!e.target.value.length) {
    maxPriceVal = 0;
    return;
  }
  maxPriceVal = +e.target.value;
})

minPrice.addEventListener('input', (e) => {
  if (!e.target.value.length) {
    minPrice = 0;
    return;
  }
  minPriceVal = +e.target.value;
})

btnPrice.addEventListener('click',function(event) {
  pizzaContainer.innerHTML = "";
  if (maxPriceVal <= minPriceVal) {
    pizzaContainer.innerText = "Min price can not be match then max price";
    return;
  }
  const findedPizzas = pizzaList.filter(pizza => {
    if (pizza.price >= minPriceVal && pizza.price <= maxPriceVal) {
      return pizza;
    }
  })
  getPizza(findedPizzas);
});


// сортировка калорийности

const maxCaloricity = document.getElementById('caloricitymax');
const minCaloricity = document.getElementById('caloricitymin');
const btnCaloricity = document.getElementById('caloricitybtn');

let maxCaloricityVal = [];
let minCaloricityVal = [];

maxCaloricity.addEventListener('input', (e) => {
  console.log(maxCaloricityVal)
  if (!e.target.value.length) {
    maxCaloricityVal = 0;
    return;
  }
  maxCaloricityVal = +e.target.value;
})

minCaloricity.addEventListener('input', (e) => {
  if (!e.target.value.length) {
    minCaloricityVal = 0;
    return;
  }
  minCaloricityVal = +e.target.value;
})

btnCaloricity.addEventListener('click',function(event) {
  pizzaContainer.innerHTML = "";
  if (maxCaloricityVal <= minCaloricityVal) {
    pizzaContainer.innerText = "Min caloricity can not be match then max caloricity";
    return;
  }
  const findedPizzas = pizzaList.filter(pizza => {
    if (pizza.caloricity >= minCaloricityVal && pizza.caloricity <= maxCaloricityVal) {
      return pizza;
    }
  })
  getPizza(findedPizzas);
});

// модальное окно корзины

const modalCart = document.querySelector('.modal-cart');
const headerCartBtn = document.querySelector('#header-cart-btn');
const headerCreateBtn = document.querySelector('#header-create-btn');

let getNewPizzas = () => {
  let pizzas = JSON.parse(localStorage.getItem('newPizzas'))
  pizzas = pizzas || [];
  pizzaList.push(...pizzas);
}
getNewPizzas();

modalCart.children[0].addEventListener('click', function () {
  modalCart.classList.toggle('active')
})

headerCartBtn.addEventListener('click', function () {
  showCart();
})

headerCreateBtn.addEventListener('click', function(){ 
  showCreate();
})

const removeFromCart = function() {
  const index = productsArr.indexOf(+this.dataset.id);
  productsArr.splice(index, 1)
  localStorage.setItem('productsArr', JSON.stringify(productsArr));
  const count = productsArr.length;
  let price = 0;
  modalCart.children[1].innerHTML = "";
  productsArr.forEach(productId => {
    const pizza = pizzaList.find(pizza => pizza.id === productId)
    price += pizza.price;
    modalCart.children[1].innerHTML += `<div class="modal-cart-pizza">
      <img src="images/${pizza.img}" alt="">
        <h3>${pizza.name}</h3>
        <p>Состав: ${pizza.composition.join(', ')}</p>
        <span>Цена: ${pizza.price} грн.</span>
        <button onclick="removeFromCart.call(this)" data-id=${pizza.id}>Remove from cart</button>
    </div>`
  })

  modalCart.children[1].innerHTML += `Count: ${count}, Price: ${price}`
}

const showCart = () => {
  window.open('cart.html','_self')
}

const showCreate = () => {
  window.open('create.html','_self')
}

const showModal = (id) => {
  const currentPizza = pizzaList.find(pizza => pizza.id === id);
  modalCart.children[1].innerHTML = `<div class="modal-cart-pizza">
  <img src="images/${currentPizza.img}" alt="">
    <h3>${currentPizza.name}</h3>
    <p>Состав: ${currentPizza.composition.join(', ')}</p>
    <span>Цена: ${currentPizza.price} грн.</span>
  </div>`
   modalCart.classList.toggle('active');
}

const btnCart = document.getElementById('cart-btn');
const pizzaMain = document.getElementById('main-pizza');
pizzaMain.onclick = function(e) {
  showModal(arr.id);
}
pizzaMain.id = arr.id

function cartClick(id) {
  const index = productsArr.findIndex(pizza => pizza.id === id);
  if (index === -1) {
    productsArr.push({
      id, 
      count: 1,
    })
  } else {
    productsArr[index].count += 1; 
  }
  localStorage.setItem('productsArr', JSON.stringify(productsArr));
}
pizzaContainer.append(pizzaMain)
