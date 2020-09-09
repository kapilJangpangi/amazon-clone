import React from 'react';
import logo from './assets/img/amazon_PNG25.png';
import { Link } from 'react-router-dom';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './Context-api/StateProvider';

const Header = () => {

  const [{ basket }] = useStateValue()

  return (  
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="LOGO" />
      </Link>
      <div className="header__search" >
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineone">Hello</span>
            <span className="header__optionLinetwo">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineone">Returns</span>
            <span className="header__optionLinetwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineone">Your</span>
            <span className="header__optionLinetwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
    
  )
}

export default Header;