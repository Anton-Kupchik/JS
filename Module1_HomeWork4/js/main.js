console.log(pizzaList)
console.log(compositionList)

function getSortArrByPrice(property) {
    let SortByPrice = [...pizzaList]
    if (property === 'descending') {
        SortByPrice.sort((a,b) => {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    if (a.price == b.price) return 0;
})
    return SortByPrice
    }
    if (property === 'ascending') {
        SortByPrice.sort((a,b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    if (a.price == b.price) return 0;
})
    return SortByPrice
};};

 console.log(getSortArrByPrice('ascending'))



let Pizza = function(id, img, name, compositionIds) {
    if (pizzaList.find(pizza => pizza.id === id)) {
        this.id = pizzaList[pizzaList.length - 1].id + 1;
    } else { this.id = id}
    this.img = img;
    this.name = name;
    // Базовая калорийность и стоимость  пиццы (условно - просто тесто)
    this.caloricity = 1000;  
    this.price = 100;
    this.composition = compositionList.filter(pizza => compositionIds.includes(pizza.id)).map(pizza => {
        this.caloricity += pizza.caloricity;
        this.price += pizza.price;
        return pizza.name
    })
    
  }
  
  let pushPizzaToArr = function(id, img, name, compositionIds) {
    let newPizza = new Pizza(id, img, name, compositionIds); 
     pizzaList.push(newPizza)
     console.log(pizzaList)
  };
  
  pushPizzaToArr(33, "22.jpg", 'Кальцоне', [1, 2, 3])

//   let admin , name;
//   name = "john";
//   admin = name;
//  console.log(admin)

//  let Name = prompt('Как тебя зовут', '');
//  alert(`My name ${Name}`);

//  let name = prompt('Какое официальное название?','');
//  if (name == 'Jordan') {
//      alert('Good!');
//  } else {
//      alert('Nogood!Jordan');
//  }
let number = prompt('Insert Number', 0);
if (number > 0) {
    alert(1);
}
else if (number < 0) {
    alert(-1);
}
else  {
    alert(0);
}