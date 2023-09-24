import React from 'react'

const Footer = () => {

  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <=closeHours;

  return (
    <footer className='footer'>
      {
        isOpen && (
          <div className='order'>
            <p>
              We're open until {closeHours}:00. Come visit us or order online.
            </p>
            <button className='btn'>Order Now</button>
          </div>
          )
      }
    </footer>
  )
}

export default Footer
