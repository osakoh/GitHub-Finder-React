import React from 'react';
import PropTypes from 'prop-types';

// rce: class based component that exports at the bottom

// destructuring icon and title from defaultProps
const Navbar = ({ icon, title }) =>
    <nav className="navbar bg-primary">
        <h3>
            <i className={icon}></i>&nbsp;{title}
        </h3>
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
