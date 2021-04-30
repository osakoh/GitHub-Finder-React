import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

// repos is passed from UserJS
const Repos = ({ repos }) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default Repos;
