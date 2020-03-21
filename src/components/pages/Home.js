import React, { Fragment, useContext } from 'react';

import Users from '../users/Users';
import Search from '../users/Search';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Home = () => {
  const githubContext = useContext(GithubContext);

  if (githubContext.loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
