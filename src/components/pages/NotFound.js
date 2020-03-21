import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => {
  return (
    <Fragment>
      <Link to='/' className='mt-3'>
        Back again
      </Link>
      <h1 className='mt-3'>NOT FOUND PAGE</h1>
    </Fragment>
  );
};

export default NotFound;
