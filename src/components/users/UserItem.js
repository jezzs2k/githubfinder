import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login } }) => {
  return (
    <div className='card text-center m-2'>
      <img
        src={avatar_url}
        className='round-img m-auto'
        style={{ width: '60px' }}
        alt='must has'
      />

      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark m-2'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
