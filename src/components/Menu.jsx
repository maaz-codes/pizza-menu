import React from 'react';
import Pizza from './Pizza';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: "$6",
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: "$10",
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: "$12",
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: "$12",
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: "$15",
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: "$18",
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Menu = () => {

  const pizzas = pizzaData;

  return (
    <main className='menu'>
        <h2>Our Menu</h2>
        {
          pizzas? (
            <>
              <p>Authentic Italian Cuisine. 6 Creative dishes to choose from. All from out stone oven, all organic, all delicious. </p>
              <ul className='pizzas'>
              {
              pizzas.map(pizza => (
                    <Pizza 
                        key={pizza.name}
                        name={pizza.name}
                        ingredients={pizza.ingredients}
                        price={pizza.price}
                        photoName={pizza.photoName}
                        soldOut={pizza.soldOut}
                    />
              ))
              }
              </ul>
            </>
          ) : (
            <h1>We're working on our Menu. Sorry for the inconvience.</h1>
          )
        }
    </main>
  )
}

export default Menu