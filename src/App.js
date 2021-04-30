import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';  // Navbar import
import Users from './components/users/Users'; // Users import
import User from './components/users/User'; // User import
import Search from './components/users/Search'; // Search import
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios'; // axios import
import './App.css';


class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  }

  // search users
  searchUsers = async text => {
    // set state before making the request
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // reset the states; individual user's details are stored in an 'items' array as shown in the github documentation
    this.setState({ users: res.data.items, loading: false });
  }

  // get a single Github user
  getSingleUser = async (username) => {
    // set state before making the request
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // reset the states; individual user's details are stored in an 'items' array as shown in the github documentation
    this.setState({ user: res.data, loading: false });
  }

  // get user repos
  getUserRepos = async (username) => {
    // set state before making the request
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // reset the states; individual user's details are stored in an 'items' array as shown in the github documentation
    this.setState({ repos: res.data, loading: false });
  }


  // clearUsers from state
  clearUsers = () => this.setState({
    users: [], // set users to an empty array
    loading: false, // set loading to false
  })

  // setAlert function
  setAlert = (msg, type) => {
    // set the alert in the state
    this.setState({ alert: { msg, type } }); // same as this.setState({ alert: { msg: msg, type: type } });

    //clear alert after 4 secs by setting the state of alert to null
    setTimeout(() => this.setState({ alert: null }), 4000);
  }

  render() {
    // destructuring loading & users from state
    const { loading, users, user, alert, repos } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          {/* passing the users & loading as props into the Users component */}
          {/* searchUsers: must be the same name as that in Search js */}
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              {/* route for home page which contains multiple components */}
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClearBtn={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )} />
              {/* route for home page which contains multiple components */}

              {/* route for about, contains a single component */}
              <Route exact path='/about' component={About} />
              {/* route for about, contains a single component */}

              {/* route to display a single user, contains a single component with props; 'login' is the username passed as part of the url*/}
              <Route exact path='/user/:login' render={props => (
                // ... represents the spread operator to capture all the props
                <User
                  {...props}
                  getSingleUser={this.getSingleUser}
                  user={user}
                  getUserRepos={this.getUserRepos}
                  repos={repos}
                  loading={loading}
                />
              )} />
              {/* route to display a single user, contains a single component with props; 'login' is the username passed as part of the url*/}


            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;


/**
 *
  // another lifecycle method just like render
  // async componentDidMount() {
  //   this.setState({ loading: true }); // changing loading state to true

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   // reset the states
  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   });
  // }
 */