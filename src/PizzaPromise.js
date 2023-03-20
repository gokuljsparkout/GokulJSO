import React from 'react'

const PizzaPromise = () => {

  const makePizza=(toppings)=>
  {
  const pizzaPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(`Here is your pizza with the toppings ${toppings.join(', ')}`)},1000);
  });
  return pizzaPromise;
}

const pepperoniPromise = makePizza(['pepperoni']);
pepperoniPromise.then((pizza)=>{
  console.log("Ahh i got it !")
  console.log(pizza);
})
console.log('Started');
const canadianPromise = makePizza(['pepperoni', 'mushroom', 'onions'])
canadianPromise.then((pizza)=>{
  console.log("Ahh i got it !")
  console.log(pizza);
  console.log('Ended')
})
console.log(canadianPromise);
  return (
    <div></div>
  )
}

export default PizzaPromise