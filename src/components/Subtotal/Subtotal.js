import React from 'react';
import { useStateValue } from '../../Context-api/StateProvider';
import './Subtotal.css';
import CheckImg from '../../assets/img/check.png';
import { useHistory } from 'react-router-dom';

function Subtotal() {
  const [{basket}] = useStateValue();

  const history = useHistory()

  let price = [];
  basket.forEach(el => {
     price.push(parseFloat(el.price))
  }) 
  console.log(price)

  let subtotal;
  if(price.length !== 0) {
     subtotal = price.reduce((a,b) => a + b, 0)
  }

  // if(subtotal) {
  //   return subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }
   
  




  return (
      <div className="subtotal__box">
        <div className="subtotal__subtotal">
          <spam>Subtotal ({basket?.length} item):</spam>
          <small>&#8377;</small>
          {subtotal && <strong>{subtotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>}
          
        </div>
        <button onClick={e => history.push('/payment')} className="subtotal__proceedBtn">Procced to Buy</button>
        <img src={CheckImg} className="subtotal__img" alt="protection Image" />
      </div> 

  )
}

export default Subtotal
