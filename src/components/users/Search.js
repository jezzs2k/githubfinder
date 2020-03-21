import React, { useState, useContext } from 'react';

import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/Alert/alertContext';

const Search = () => {
  const alertContext = useContext(AlertContext);

  const githubContext = useContext(GithubContext);
  const [text, setText] = useState('');

  const onchange = e => {
    setText(e.target.value);
  };

  const onsubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'danger');
    } else {
      githubContext.searchUser(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onsubmit} className='form mt-2'>
        <input
          type='text'
          name='text'
          placeholder='Search User...'
          style={{ width: '100%' }}
          value={text}
          onChange={onchange}
        />
        <button className='btn btn-dark btn-block mt-2' type='submit'>
          Search User
        </button>
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block mt-2'
          onClick={githubContext.clearUser}>
          Clear Users
        </button>
      )}
    </div>
  );
};

export default Search;
