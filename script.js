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

function randoPizza(){
    var crustTypes= ["deep dish","thin","stuffed"]
    var sauceTypes= ["traditional","pesto","garlic"]
    var cheeses= ["mozzarella",]
    var toppings=[["bacon","chicken"],["chicken","mushrooms"]]
    
    var pizza = {};
    pizza.crustType= crustTypes[Math.floor(Math.random()*crustTypes.length)];
    pizza.sauceType= sauceTypes[Math.floor(Math.random()*sauceTypes.length)]
    pizza.cheeses= cheeses[Math.floor(Math.random()*cheeses.length)]
    pizza.toppings= toppings[Math.floor(Math.random()*toppings.length)]
    return pizza 
}

var newPizza = randoPizza()
console.log(newPizza)
