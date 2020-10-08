import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header';
import Home from './components/Home/home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import { auth } from './firebase'; 
import { useStateValue } from './Context-api/StateProvider';


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    ///listening to user if it is loggeg in or logged out
    auth.onAuthStateChanged(authUser => {
      console.log('THe user is >>>', authUser)

      if(authUser) {
        //the user is logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        //the useri is logged out 
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

  }, [])
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/Checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/payment">
          <Header />
          <Payment />
        </Route>
        <Route path='/'>
          <Header />
          <Home />
        </Route>
        <Route path="">

        </Route>
      </Switch> 
      </div>
      
    </Router>
    
  );
}

export default App;
