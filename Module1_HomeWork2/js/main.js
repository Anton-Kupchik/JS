function getPizzasNames() {
    var arrWithNames = [];
    for(var i = 0; i < pizzaList.length; i++){
        let pizza = pizzaList[i];
        arrWithNames.push(pizza.name)
    }
    return arrWithNames
}
function getPizzaById(id) {
    var pizza= {};
    for(var i = 0; i < pizzaList.length; i++){
        let pizzaFromArray = pizzaList[i];
        if (pizzaFromArray .id  ===  id) {
              pizza = pizzaFromArray;
        }
    }
    return pizza;
}
function getAllWithoutPizzaById(id) {
    var pizza= {};
    for(var i = 0; i < pizzaList.length; i++){
        let pizzaFromArray = pizzaList[i];
        if (pizzaFromArray .id  !==  id) {
              pizza = pizzaFromArray;
        }
    }
    return pizza;
}

function getPizzaByComposition() {
    var arrByComposition = [];
    for(var i = 0; i < pizzaList.length; i++){
        let pizza = pizzaList[i];
        arrByComposition.push(pizza.composition)
    }
    return arrByComposition
}

function getPizzasNamesES6(){
    var arrWithNames = [];
    pizzaList.forEach(pizza => {
        arrWithNames.push(pizza.name)
    });
    return arrWithNames
}
function getPizzaByIdES6(id) {
    var pizza= pizzaList.find(iterationPizza => {
            if (iterationPizza .id === id){
                      return true;
            }
              return false;
    })
    return pizza;
}
function getAllWithoutPizzaByIdES6(id) {
    var pizza= pizzaList.find(iterationPizza => {
            if (iterationPizza .id !== id){
                      return true;
            }
              return false;
    })
    return pizza;
}

console.log(getPizzasNames())
console.log(getPizzaById(2))
console.log(getAllWithoutPizzaById())
console.log(getPizzaByComposition())
console.log(getPizzasNamesES6())
console.log(getPizzaByIdES6(2))
console.log(getAllWithoutPizzaByIdES6())

let user = {};
user.name = 'John';
user.sername  = 'Smith';
user.name = 'Andre';
delete user.name;

console.log(user);

