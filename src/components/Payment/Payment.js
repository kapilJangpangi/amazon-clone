import React from 'react';
import { useStateValue } from '../../Context-api/StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct';
import './Payment.css';
import { Link } from 'react-router-dom';

function Payment() {

  const [{ basket, user }] = useStateValue()
  return (
    <div className="payment">
        <div className="payment__container">
          <h1>
            Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
          </h1>
          <div className="payment__section" >
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>123 React Lane</p>
              <p>Los Angeles, CA</p>
            </div>
          </div>

          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
              {basket?.map(item => (
                <CheckoutProduct
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating} 
                  />
                ))
              }
            </div>
          </div>

          <div className="payment__section">
            <div className="payment__title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment__detials">

            </div>

          </div>


        </div>
      
    </div>
  )
}

export default Payment
