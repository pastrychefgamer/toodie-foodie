import React from 'react';
// import styles from './Home.module.css';

const Home = (props) => {
    return (
        <main>
            <h1>Featured Restaurants</h1>
            {
                props.featured.map(({title, cuisine, _id}) => (
                    <section key={_id}>
                        <h1>{title}</h1>
                        <p>{cuisine}</p>
                    </section>
                ))
            }
        </main>
    );
}

export default Home;