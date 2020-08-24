import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Collection from './components/Collection';
import ShopCart from './components/ShopCart';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" >
          <Navbar />
          <Route exact path='/' component={Collection} />
          <Route path='/cart' component={ShopCart} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
