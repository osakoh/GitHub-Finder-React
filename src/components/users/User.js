import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layout/Spinner"; // Spinner import
import Repos from "../Repos/Repos";
import PropTypes from "prop-types"; // PropType import: impt
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

// destructuring from props
const User = ({ match }) => {
  // initialise GithubContext
  const githubContext = useContext(GithubContext);

  const { getSingleUser, user, loading, repos, getUserRepos } = githubContext;

  // useEffect hook allows components to have access to the lifecycle events of a component/mimics the lifecycle component(componentDidMount)
  // this is first run by React when the component is first rendered, and on every subsequent render/update
  useEffect(() => {
    // params.login: gets the username from the url; 'login' is the parameter used when defining the path in App JS
    getSingleUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);
  /**
    eslint-disable-next-line: disables the dependency warnings for getSingleUser, getUserRepos & match.params.login
    useEffect() function is run on every subsequent re-render/update of the component, we can tell React to
    skip it, for performance purposes, by adding a second parameter which is an array that contains a list 
    of state variables to watch for. React will only re-run the side effect if oneof the items in this array changes.
    Also, you can tell React to only execute the side effect once (at mount time), by passing an empty array:
    */

  // destructuring from user
  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Homepage
      </Link>
      Hireable: {"  "}
      {hireable ? (
        <i className="fas fa-check text-success"></i>
      ) : (
        <i className="fas fa-times-circle text-danger"></i>
      )}
      <div className="card grid-2" style={{ marginTop: "40px" }}>
        <div className="all-center">
          <img
            src={avatar_url}
            alt="Profile"
            className="round-img"
            style={{ width: " 150px" }}
          />
          <p>Name: {name}</p>
          <p>Location: {location}</p>
        </div>

        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1" target="__blank">
            View GitHub profile
          </a>

          <li>
            {login && (
              <Fragment>
                <strong>Username: </strong>
                {login}
              </Fragment>
            )}
          </li>
          <li>
            {company && (
              <Fragment>
                <strong>Company: </strong>
                {company}
              </Fragment>
            )}
          </li>
          <li>
            {blog && (
              <Fragment>
                <strong>Website: </strong>
                <a href={blog} target="__blank">
                  {blog}
                </a>
              </Fragment>
            )}
          </li>
        </div>
      </div>
      <div className="card text-center" style={{ marginTop: "15px" }}>
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-danger">Public Repos: {public_repos}</div>
        <div className="badge badge-black">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
