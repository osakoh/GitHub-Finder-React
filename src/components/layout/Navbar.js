import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// rce: class based component that exports at the bottom

// destructuring icon and title from defaultProps
const Navbar = ({ icon, title }) =>
    <nav className="navbar bg-primary">
        <h3>
            <Link to="/"><i className={icon}></i>&nbsp;{title}</Link>
        </h3>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>


// default props
Navbar.defaultProps = {
    title: 'GitHub Profile Finder',
    icon: 'fab fa-github-alt'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired, // ptsr
    icon: PropTypes.string.isRequired // ptsr
}


export default Navbar;
