import React from 'react';
import './Product.css'
import { useStateValue } from '../../Context-api/StateProvider';

function Product({ id, image, title, rating, price }) {

  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD',
      items: {
        id,
        title,
        rating,
        image,
        price
      }
    })
  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product__price">
          <small>&#8377;</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating" >
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="productImg" />
      <button onClick={addToBasket} >Add to basket</button>
    </div>
  )
}

export default Product
