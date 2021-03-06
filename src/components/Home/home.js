import React from 'react'
import HomeImg from '../../assets/img/hero1.jpg';
import Product from '../Product/Product';
import './Home.css';
import Pimg from '../../assets/img/21_.jpg';
import P2 from '../../assets/img/P2.jpg';
import P3 from '../../assets/img/P3.jpg';
import P5 from '../../assets/img/P5.jpg';
import P6 from '../../assets/img/P6.jpg';
import P7 from '../../assets/img/P7.jpg';
import Special from '../Special/Special';


function home() {
  return (
    <div className="home">
      <img className="home__image" src={HomeImg} alt="back Image" />
      
      <div className='home__row'>
        <Product 
        id={Math.random()}
        title="Mi Notebook 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop(8GB/512GB SSD/Windows 10/Nvidia MX250 2GB Graphics/Silver/1.5Kg)"
        price='49999.00'
        image={Pimg}
        rating={4}
        />
        <Product 
        id= {Math.random()}
        title="Think Like a Monk: Train Your Mind for Peace and Purpose Every Day Kindle Edition"
        price='250.08'
        image={P2}
        rating={4}
        />
      </div>

      <div className='home__row'>
        <Product 
        id={Math.random()}
        title="Sony Digital Vlog Camera ZV 1 (Compact, Video Eye AF, Flip Screen, in-Built Microphone, Bluetooth Shooting Grip, 4K Vlogging Camera and Content Creation)"
        price='69990.00'
        image={P3}
        rating={4}
        />
        <Product 
        id={Math.random()}
        title="Lenovo Tab M10 FHD Plus Tablet (10.3-inch, 4GB, 128GB, Wi-Fi + LTE, Volte Calling), Platinum Grey"
        image={P5}
        price='23900.00'
        rating={4}
        />

        <Product 
        id={Math.random()}
        title="Ketofy - Dark Keto Chocolate (50g) | Sugar Free Unsweetened Intense Dark Chocolate | No Maltitol | Gluten Free"
        price='230.00'
        image={P7}
        rating={4}
        />
      </div>

      <div className='home__row'>
        <Product 
        id={Math.random()}
        title='Samsung 138 cm (55 Inches) Q Series 4K UHD QLED Smart TV QA55Q7FNAK (Black) (2018 model)'
        image={P6}
        price='99990.00'
        rating={4}
        />
      </div>
        <Special />
    </div>
  )
}

export default home;
