import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header';
import Home from './components/Home/home';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/Checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <h1>LOgin </h1>
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
