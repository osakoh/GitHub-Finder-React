import React from "react";
import PropTypes from "prop-types";

// repo is passed from ReposJS
const RepoItem = ({ repo: { html_url, name, description } }) => {
  return (
    <div className="card">
      <h3>
        <a href={html_url} target="__blank">
          {name}
        </a>
      </h3>
      <p>{description}</p>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
