import React, {Fragment} from 'react';
import './Special.css'
import SpecialImg from '../../assets/img/r.png'

function Special() {
  
  return (
    <Fragment >
      <div className="Special">
      <div className="container">
        <h1>Nike Air Max Infuriate
          Is Here!!</h1>
        <h3>
          Wait is Over. Go Grab one for you
        </h3>
        <div className="box">
          <h2 className="name">Air Max Infuriate</h2>
          <a href="#" className="buy">Buy Now</a>
          <div className="circle" />
          <img src={SpecialImg} className="products" />
        </div>
        
      </div>
      </div>
      
      
    </Fragment>
    
    
  )
}

export default Special;
