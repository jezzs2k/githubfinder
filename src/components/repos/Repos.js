import React, { Fragment, useContext } from 'react';

import GithubContext from '../../context/github/githubContext';
import RepoItem from './RepoItem';

export default function Repos() {
  const githubContext = useContext(GithubContext);

  return (
    <Fragment>
      <h3 className='mt-4 mb-2' style={{ color: 'orange' }}>
        Repositore
      </h3>
      {githubContext.repos.map(repo => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </Fragment>
  );
}
