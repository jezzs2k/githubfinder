import React, { useContext } from 'react';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const User = () => {
  const githubContext = useContext(GithubContext);
  if (GithubContext.loading) {
    return <Spinner />;
  }
  return (
    <div style={UserStyle}>
      {githubContext.users.map(user => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

const UserStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)'
};

export default User;
