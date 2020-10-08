import React, { useState, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import Img from '../../assets/img/amazon_PNG21.png';
import { auth } from '../../firebase';
import Bike from '../Bike/Bike';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(auth => {
      if(auth) {  
        history.push('/')
      }
    })
    .catch(err => {
      alert(err.message)
    })
  }
  const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      console.log(auth);
      if(auth) {
        history.push('/')
      }
    })
    .catch(err => alert(err.message))
  }

  return (
    <Fragment>
      <Bike  className="bike"/>
      <div className="login">
      <Link to="/">
        <img src={Img} className="login__logo" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
          <button onClick={signIn} className="login__signInbtn">Sign In</button>
          <p className="login__para">
          By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
          </p>
          <button className="login__RegisterBtn" onClick={register}>Create your amazon account</button>
        </form>
      </div>
    </div>
   
    </Fragment>
    
  )
}

export default Login
