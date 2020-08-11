import React, { useState } from 'react';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';
import styles from './Restaurants.module.css';

const Restaurants = (props) => {
    const [ formVisible, setVisibility ] = useState(false);
    return (
        <main>
            <h1>Restaurants</h1>
            <button onClick={() => setVisibility(!formVisible)}>
                {formVisible ? 'Hide Form' : 'Show Form'}
            </button>
            {
                formVisible
                &&
                <RestaurantForm {...props} />
            }
            {
                props.restaurants.map(({title, _id, cuisine, addedBy} ) => (
                <div className={styles.container}>
                    <section className={styles.section} key={_id}>
                        <h1>{title}</h1>
                        <p className={styles.content}>Cuisine: {cuisine}</p>
                        <small className={styles.content}>Added By: {addedBy.name}</small>
                    </section>
                </div>
                ))
            }
        </main>
    );
}

export default Restaurants;