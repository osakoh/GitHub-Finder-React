import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';  // Navbar import
import Users from './components/users/Users'; // Users import
import Search from './components/users/Search'; // Search import
import axios from 'axios'; // axios import
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  // another lifecycle method just like render
  async componentDidMount() {
    this.setState({ loading: true }); // changing loading state to true

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // reset the states
    this.setState({
      users: res.data,
      loading: false
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        {/* passing the users & loading as props into the Users component */}
        <div className="container">
          <Search />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>

    );
  }

}

export default App;
