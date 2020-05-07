import React from 'react';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';
// import styles from './Restaurants.module.css';

const Restaurants = (props) => {
    return (
        <main>
            <h1>Restaurants</h1>
            {
                props.restaurants.map(({title, _id, cuisine, addedBy} ) => (
                <section key={_id}>
                    <h1>{title}</h1>
                    <p>Cuisine: {cuisine}</p>
                    <small>Added By: {addedBy.name}</small>
                </section>
                ))
            }
            <RestaurantForm {...props} />
        </main>
    );
}

export default Restaurants;