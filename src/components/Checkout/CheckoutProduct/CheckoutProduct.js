import React, {Fragment} from 'react'
import './CheckoutProduct.css'
function CheckoutProduct({id, title, image, price, rating}) {
  return (
    <Fragment>
        <div className="checkoutProduct">
        <img src={image}/>
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
              <small>&#8377;</small>
              <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating" >
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
          <button>Remove from Basket</button>
        </div>
      </div>
      <span class="checkoutProduct__icon">&nbsp;</span>
    </Fragment>
    
  )
}

export default CheckoutProduct
