import React, {Fragment} from 'react'
import { useStateValue } from '../../Context-api/StateProvider';
import AddImg from '../../assets/img/finally.jpg';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import FlipMove from 'react-flip-move';
 
function Checkout() {
  const [{basket}] = useStateValue();
  console.log(basket)
  
  //console.log(img.pop())
  //console.log(subtotal)
  
  //console.log(subtotal)
  return (
    <Fragment>
        <div className="checkout">
            <img className="checkout__add"  src={AddImg}/>
            <Subtotal/>          
        </div>
        <div className="another">
        {
            basket?.length === 0 ? (
              <div>
                <h2>Your Shopping Basket is empty</h2>
                <p>
                  You have no items in your basket. To buy one or more items, click "Add to Basket" next to the item.
                </p>
                <span class="checkout__icon">&nbsp;</span>
              </div>
            ) : (
              <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>
                <span class="checkout__icon">&nbsp;</span>
                <FlipMove enterAnimation="elevator" leaveAnimation="elevator"  >
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
                </FlipMove>
                
              </div>
            ) 
          }
        </div>

        
          
    </Fragment>
    
  )
}

export default Checkout
