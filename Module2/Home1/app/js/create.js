const createPizzaModel = class {
    constructor({name,composition,price,caloricity}) {
        this.id = pizzaList.length+1;
        this.name = '';  
        this.composition = [];
        this.price = price;
        this.caloricity = caloricity; 
        this.isNew = true;
        this.getName(name)
        this.getCompositionsAsName(composition)
    }
    getName(name) {
        name = name.toLowerCase().split('');
        name[0] = name[0].toUpperCase();
        this.name = name.join('');

    }
    getCompositionsAsName(composition) {
        this.composition = compositionList.filter(el => {
            return composition.includes(el.id)
        }).map(el => el.name);
    }
}
const pizzaModel = {
    name: '',  
    composition: [],
    price: 0,
    caloricity: 0, 
}

const createAddTitle = document.getElementById('createaddTitle');

const compositionsContainer = document.querySelector('.create-compositions');

const infoContainer = document.querySelector('.create-info');

const btnCreate = document.getElementById('btnCreate');

const renderInfo = (caloricity,price) => {
    infoContainer.innerHTML = `<h3>Цена: ${price || 0} грн.</h3>
    <p>Калории: ${caloricity || 0} кКал</p>`
}
renderInfo()

compositionList.forEach(item => {
    const labelElem = document.createElement('label');

    labelElem.innerText = item.name;

    labelElem.htmlFor = 'composition'+item.id;

    const compositionElem = document.createElement('input');

    compositionElem.id = 'composition'+item.id;

    compositionElem.type = 'checkbox';

    compositionElem.addEventListener('change', function() {
        let composition = pizzaModel.composition;
        if (this.checked) {
            composition.push(item.id)
          } else {
            pizzaModel.composition = composition.filter(composId => composId !== item.id);
          }
      
          pizzaModel.price = pizzaModel.composition.length ? 100 : 0;
          pizzaModel.caloricity = pizzaModel.composition.length ? 1000 : 0;
      
          pizzaModel.composition.forEach(composId => {
            pizzaModel.price += compositionList.find(el => el.id === composId).price;
          })
          pizzaModel.composition.forEach(composId => {
            pizzaModel.caloricity += compositionList.find(el => el.id === composId).caloricity;
          })
          renderInfo(pizzaModel.caloricity, pizzaModel.price);
        })
      compositionsContainer.append(labelElem)
      compositionsContainer.append(compositionElem)
  
  })

  createAddTitle.addEventListener('input',(e) => {
    pizzaModel.name = e.target.value;
})

const orderInfo = JSON.parse(localStorage.getItem('orderInfo')) ?
  JSON.parse(localStorage.getItem('orderInfo')) : [];

  btnCreate.addEventListener('click', (e) => {
    localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
    window.open('cart.html', '_self');
  })

  
