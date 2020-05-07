import React, { useState } from 'react';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';
// import styles from './Restaurants.module.css';

const Restaurants = (props) => {
    const [ formVisible, setVisibility ] = useState(false);
    return (
        <main>
            <h1>Restaurants</h1>
            <button onClick={() => setVisibility(!formVisible)}>
                {formVisible ? 'Hide Form' : 'Show Form'}
            </button>
            {
                props.restaurants.map(({title, _id, cuisine, addedBy} ) => (
                <section key={_id}>
                    <h1>{title}</h1>
                    <p>Cuisine: {cuisine}</p>
                    <small>Added By: {addedBy.name}</small>
                </section>
                ))
            }
            {
                formVisible
                &&
                <RestaurantForm {...props} />
            }
            
        </main>
    );
}

export default Restaurants;