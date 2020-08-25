import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Collection from './components/Collection';
import ShopCart from './components/ShopCart';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import AddBooks from './components/AddBook';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" >
          <Navbar />
          <Route exact path='/' component={Collection} />
          <Route path='/cart' component={ShopCart} />
          <Route path='/login' component={Login} />
          <Route path='/addnewbook' component={AddBooks} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
