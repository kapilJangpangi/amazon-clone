import React, {Fragment} from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../../Context-api/StateProvider';



function CheckoutProduct({id, title, image, price, rating}) {

  const [{basket}, dispatch] = useStateValue();

  const remove = () => {
    dispatch({ type: 'REMOVE', id: id })
  }

  return (
    <Fragment>
        <div className="checkoutProduct">
        <img src={image}/>
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            {image && <small>&#8377;</small>}  
            <strong>{price}</strong>
          </p>
          {
          image && 
          <div className="checkoutProduct__rating" >
            {Array(rating)
              .fill()
              .map((_) =>(
                <p>⭐</p>
              ))}
          </div>
          }
          
          {image && <button onClick={remove}>Remove from Basket</button>}
        </div>
      </div>
      {image && <span class="checkoutProduct__icon">&nbsp;</span>}
    </Fragment>
    
  )
}

export default CheckoutProduct
