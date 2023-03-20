import React from 'react'

const PizzaPromise = () => {

  const makePizza=(toppings = [])=>
  {
  const pizzaPromise = new Promise((resolve,reject)=>{
    const amountOfTimeToBake = 500 + (toppings.length * 200);
    console.log(`Wait for ${amountOfTimeToBake/1000} seconds`)
    setTimeout(()=>{resolve(`Here is your pizza with the toppings ${toppings.join(', ')}`)},amountOfTimeToBake);
  });
  return pizzaPromise;
}
const pizzaPromise1 = makePizza(['pepperoni']);
const pizzaPromise2 =makePizza(['ham','cheese']);
const pizzaPromise3 =makePizza(['pineapple','apple','meat','olive']);

const dinnerPromise = Promise.all([pizzaPromise1,pizzaPromise2,pizzaPromise3]);
dinnerPromise.then((pizza)=>console.log(pizza));
  return (
    <div></div>
  )
}

export default PizzaPromise