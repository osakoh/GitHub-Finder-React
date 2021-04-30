import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';  // Spinner import
import Repos from '../Repos/Repos';
import PropTypes from 'prop-types' // PropType import: impt
import { Link } from 'react-router-dom';



class User extends Component {

    componentDidMount() {
        // props.match.params.login: gets the username from the url; 'login' is the parameter used when defining the path in App JS
        this.props.getSingleUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    // Proptypes
    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getSingleUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired,
        repos: PropTypes.array.isRequired,
    }

    render() {
        const { repos, loading, user: { name, company, avatar_url, location, bio, blog, login, html_url,
            followers, following, public_repos, public_gists, hireable } } = this.props;

        if (loading) return <Spinner />;
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>Back to Homepage</Link>
                    Hireable: {'  '}
                {hireable ? <i className="fas fa-check text-success"></i> :
                    <i className="fas fa-times-circle text-danger"></i>}

                <div className="card grid-2" style={{ marginTop: "40px" }}>

                    <div className="all-center">
                        <img src={avatar_url} alt="Profile Picture" className="round-img" style={{ width: " 150px" }} />
                        <p>Name: {name}</p>
                        <p>Location: {location}</p>
                    </div>

                    <div>
                        {bio &&
                            (<Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>)}
                        <a href={html_url} className="btn btn-dark my-1" target="__blank">View GitHub profile</a>

                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Username: </strong>{login}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {company && (
                                <Fragment>
                                    <strong>Company: </strong>{company}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <Fragment>
                                    <strong>Website: </strong><a href={blog} target="__blank">{blog}</a>
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

            </Fragment>)

    }
}

export default User
