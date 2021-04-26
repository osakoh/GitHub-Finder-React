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
  // async componentDidMount() {
  //   this.setState({ loading: true }); // changing loading state to true

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   // reset the states
  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   });
  // }

  // search users
  searchUsers = async text => {
    // set state before making the request
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // reset the states; individual user's details are stored in an 'items' array as shown in the github documentation
    this.setState({ users: res.data.items, loading: false });
  }

  // clearUsers from state
  clearUsers = () => this.setState({
    users: [], // set users to an empty array
    loading: false, // set loading to false
  })

  render() {
    return (
      <div className="App">
        <Navbar />
        {/* passing the users & loading as props into the Users component */}
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} />  {/* searchUsers: must be the same name as that in Search js */}
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>

    );
  }

}

export default App;
