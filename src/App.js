import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Restaurants from './pages/Restaurants/Restaurants';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

import './App.css';
import userService from './utils/userService';
import restaurantService from './utils/restaurantService';


class App extends Component {
  state = {
    user: userService.getUser(),
    restaurants: [],
    featured: []
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() }, () => {
      this.handleGetFeatured();
    })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null, restaurants: [] });
  }

  handleGetRestaurants = async () => {
    if(userService.getUser()) {
      const { restaurants } = await restaurantService.index();
      this.setState({ restaurants });
    }
  }

  handleGetFeatured = async () => {
    const { featured } = await restaurantService.getFeatured();
    this.setState({ featured });
  }

  componentDidMount() {
    this.handleGetFeatured();
    this.handleGetRestaurants();
  }

  render() {
    return (
      <div className="App-outer-container">
        <Navbar handleLogout={this.handleLogout} />
        <div className="App-inner-container">
          <Switch>
            <Route exact path='/' render={props =>
              <Home featured={this.state.featured} />
            } />
            <Route exact path='/restaurants' render={props =>
            userService.getUser()
            ? <Restaurants 
            {...props} 
            handleGetRestaurants={this.handleGetRestaurants}
            restaurants={this.state.restaurants}
            />
            : <Redirect to="/login" />
            } />
            <Route exact path='/login' render={props =>
              <Login
              {...props} 
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />
            <Route exact path='/signup' render={props =>
              <Signup 
              {...props} 
              handleSignupOrLogin={this.handleSignupOrLogin}/>
            } />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
  
}

export default App;
