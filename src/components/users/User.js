import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, getUserRepo, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepo(match.params.login);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const {
    login,
    avatar_url,
    html_url,
    name,
    company,
    location,
    bio,
    public_repos,
    public_gists,
    followers,
    following,
    hireable
  } = user;

  return (
    <Fragment>
      <Link to='/'>
        <button className='btn btn-light mt-4'>Back to Search</button>
      </Link>
      <p className='mt-3'>
        Hireable {'    '}
        {hireable ? (
          <i className='fa fa-check text-seccess'></i>
        ) : (
          <i className='fa fa-times-circle text-danger'></i>
        )}
      </p>
      <div
        className='card grid-2 mt-3'
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div className='all-center p-3'>
          <img
            src={avatar_url}
            className='round-img'
            style={{ width: '150px', borderRadius: '50%' }}
            alt='Avatar'
          />
          <h4 className='mt-2'>Name: {name}</h4>
          <p>Company: {company}</p>
          <a href={html_url}>
            <button className='btn btn-dark'>Visit profile github</button>
          </a>
        </div>
        <div className='p-4'>
          {bio && (
            <Fragment>
              <p>Bio: {bio}</p>
            </Fragment>
          )}
          {location && (
            <Fragment>
              <p>Location: {location}</p>
            </Fragment>
          )}
          {login && (
            <Fragment>
              <p>Username: {login}</p>
            </Fragment>
          )}
          <div className='badge badge-primary mr-1'>Followers: {followers}</div>
          <div className='badge badge-danger mr-1'>Following: {following}</div>
          <div className='badge badge-light mr-1'>
            Public Repos: {public_repos}
          </div>
          <div className='badge badge-info mr-1'>
            Public gists: {public_gists}
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
