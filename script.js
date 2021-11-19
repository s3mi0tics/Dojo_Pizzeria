function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType= crustType;
    pizza.sauceType= sauceType;
    pizza.cheeses= cheeses;
    pizza.toppings= toppings
    return pizza 
}

var pizza1= pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"])
var pizza2= pizzaOven("thin", "pesto", ["mozzarella","fontina"], ["chicken","mushrooms"])
var pizza3= pizzaOven("stuffed", "garlic", ["cheddar", "mozzarella"],["bacon", "chicken"])

// console.log(pizza1)
// console.log(pizza2)
// console.log(pizza3)

var arrpizza=["pizza1","pizza2","pizza3"]

var randoPizza = arrpizza[randPizza()]

function randPizza(){
    return Math.floor(Math.random()*3)
}
console.log(randoPizza)