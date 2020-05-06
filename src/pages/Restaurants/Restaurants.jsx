import React from 'react';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';
// import styles from './Restaurants.module.css';

const Restaurants = (props) => {
    return (
        <main>
            <h1>Restaurants</h1>
            <RestaurantForm {...props} />
        </main>
    );
}

export default Restaurants;