import React from 'react';
import { useStateValue } from '../../Context-api/StateProvider';
import './Subtotal.css';
import CheckImg from '../../assets/img/check.png';

function Subtotal() {
  const [{basket}] = useStateValue();

  let price = [];
  basket.forEach(el => {
     price.push(parseFloat(el.price))
  }) 
  console.log(price)

  let subtotal;
  if(price.length !== 0) {
     subtotal = price.reduce((a,b) => a + b, 0)
  }
  return (
      <div className="checkout__box">
        <div className="checkout__subtotal">
          <spam>Subtotal ({basket?.length} item):</spam>
          <small>&#8377;</small>
          <strong>{subtotal}</strong>
        </div>
        <button className="checkout__proceedBtn">Procced to Buy</button>
        <img src={CheckImg} alt="protectio Image" />
      </div> 

  )
}

export default Subtotal
