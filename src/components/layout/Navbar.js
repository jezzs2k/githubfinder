import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className='navbar bg-danger' style={{ color: 'white' }}>
      <div className='container'>
        <h4 className='logo'>
          <i className={props.icon} /> {props.title}
        </h4>
        <ul className='navbar-nav' style={{ display: 'flex', flexFlow: 'row' }}>
          <li className='nav-item mr-3'>
            <Link className='nav-link' to='/' style={{ color: 'white' }}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/about' style={{ color: 'white' }}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'GitHub Finder',
  icon: 'fa fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
