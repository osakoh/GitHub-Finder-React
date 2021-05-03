import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; // Navbar import
import Users from "./components/users/Users"; // Users import
import User from "./components/users/User"; // User import
import Search from "./components/users/Search"; // Search import
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import axios from "axios"; // axios import
import GithubState from "./context/github/GithubState";

import "./App.css";

const App = () => {
  // defining the state- Syntax: [inputName, setInputName]=useState(defaultValue);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // get a single Github user
  const getSingleUser = async (username) => {
    // set state before making the request
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // reset the states; individual user's details are stored in an 'items' array as shown in the github documentation
    setUser(res.data); // formerly: this.setState({ user: res.data, loading: false });
    setLoading(false);
  };

  // get user repos
  const getUserRepos = async (username) => {
    // set state before making the request
    setLoading(true); // formerly: this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // reset the states; individual user's details are stored in an 'items' array as shown in the github documentation
    setRepos(res.data); // formerly: this.setState({ user: res.data, loading: false });
    setLoading(false);
  };

  // clearUsers from state
  const clearUsers = () => {
    setUsers([]); // set users to an empty array
    setLoading(false); // set loading to false
  };

  // showAlert function
  const showAlert = (msg, type) => {
    // set the alert in the state
    setAlert({ msg, type }); // this.setState({ alert: { msg, type } }); // same as this.setState({ alert: { msg: msg, type: type } });

    //clear alert after 4 secs by setting the state of alert to null
    setTimeout(() => setAlert(null), 4000); // setTimeout(() => this.setState({ alert: null }), 4000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          {/* passing the users & loading as props into the Users component */}
          {/* searchUsers: must be the same name as that in Search js */}
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              {/* route for home page which contains multiple components */}
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      clearUsers={clearUsers}
                      showClearBtn={users.length > 0 ? true : false}
                      showAlert={showAlert}
                    />
                    <Users />
                  </Fragment>
                )}
              />
              {/* route for home page which contains multiple components */}

              {/* route for about, contains a single component */}
              <Route exact path="/about" component={About} />
              {/* route for about, contains a single component */}

              {/* route to display a single user, contains a single component with props; 'login' is the username passed as part of the url*/}
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  // ... represents the spread operator to capture all the props
                  <User
                    {...props}
                    getSingleUser={getSingleUser}
                    user={user}
                    getUserRepos={getUserRepos}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
              {/* route to display a single user, contains a single component with props; 'login' is the username passed as part of the url*/}
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

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
