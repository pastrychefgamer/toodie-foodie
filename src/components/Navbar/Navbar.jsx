import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';
import userService from '../../utils/userService';

const Navbar = (props) => {
    const conditionalUI = userService.getUser()
    ?   <>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="" onClick={props.handleLogout}>Logout</Link></li>
        </>
    :
        <>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        </>
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <h1>Toodie Foodie</h1>
            </Link>
            <ul>
                { conditionalUI }
            </ul>
        </nav>
    );
}

export default Navbar;