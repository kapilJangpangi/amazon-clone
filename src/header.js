import React from 'react';
import logo from './assets/img/amazon_PNG25.png';
import { Link } from 'react-router-dom';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './Context-api/StateProvider';
import { auth } from './firebase';

const Header = () => {

  const [{ basket, user }] = useStateValue()
  console.log(basket)


  const handlerAuth = () => {
    if(user) {
      auth.signOut();
    }
  }

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
        <Link to={!user && '/login'} className="header__link">
          <div onClick={handlerAuth} className="header__option">
            <span className="header__optionLineone">Hello</span>
            {user ? <h3>{user?.email}</h3> : <h3>Guest</h3>}
            
            <span className="header__optionLinetwo">{user ? 'Sign Out' : 'Sign In'} </span>
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