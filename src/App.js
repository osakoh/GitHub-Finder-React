import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; // Navbar import
import Users from "./components/users/Users"; // Users import
import User from "./components/users/User"; // User import
import Search from "./components/users/Search"; // Search import
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            {/* passing the users & loading as props into the Users component */}
            {/* searchUsers: must be the same name as that in Search js */}
            <div className="container">
              <Alert />
              <Switch>
                {/* route for home page which contains multiple components */}
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                {/* route for home page which contains multiple components */}

                {/* route for about, contains a single component */}
                <Route exact path="/about" component={About} />
                {/* route for about, contains a single component */}

                {/* route to display a single user, contains a single component with props; 'login' is the username passed as part of the url*/}
                <Route exact path="/user/:login" component={User} />
                {/* route to display a single user, contains a single component with props; 'login' is the username passed as part of the url*/}
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
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
