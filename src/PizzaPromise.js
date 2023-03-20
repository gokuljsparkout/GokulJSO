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
makePizza(['pepperoni']).then((pizza)=>{
  console.log(pizza);
  return makePizza(['ham','cheese'])
}).then((pizza)=>{
  console.log(pizza)
  return makePizza(['pineapple','apple','meat','olive'])
}).then((pizza)=>{
  console.log(pizza);
})
  return (
    <div></div>
  )
}

export default PizzaPromise