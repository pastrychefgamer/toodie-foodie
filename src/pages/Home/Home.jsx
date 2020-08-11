import React from 'react';
import styles from './Home.module.css';

const Home = (props) => {
    return (
        <main>
            <h1>Featured Restaurants</h1>
            {
                props.featured.map(({title, cuisine, _id}) => (
                    <section className={styles.container} key={_id}>
                        <div className={styles.card}>
                            <h1>{title}</h1>
                            <p>{cuisine}</p>
                        </div>
                    </section>
                ))
            }
        </main>
    );
}

export default Home;