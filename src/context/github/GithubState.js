/*
App  level states are initialised and a provider is exported which is used to wrap
the entire application.
*/

import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

// initial state
const GithubState = (props) => {
  // global state for github
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  // dispatch type to reduce
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // search users
  const searchUsers = async (text) => {
    // set state before making the request
    setLoading(); // formerly: this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // type: match a string variable in type JS; payload: is the data that is sent
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  // get a single Github user
  const getSingleUser = async (username) => {
    // set state before making the request
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // reset the states; individual user's details are stored in a 'data' array as shown in the github documentation
    dispatch({ type: GET_USER, payload: res.data });
  };

  // get repos

  // clearUsers from state
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // set loading
  // type: match a string variable in type JS
  const setLoading = () => dispatch({ type: SET_LOADING });
  // set alert
  // remove alert

  return (
    <GithubContext.Provider
      value={{
        // value contains any variable that should be available to the entire application
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,

        searchUsers,
        clearUsers,
        getSingleUser,
      }} // value contains any variable that should be available to the entire application
    >
      {/* because the entire application will be wrap with the provider*/}
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
