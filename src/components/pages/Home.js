import React, { Fragment } from "react";
import Search from "../users/Search"; // Search import
import Users from "../users/Users"; // Users import

const Home = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);

export default Home;
