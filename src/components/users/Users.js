import React, { useContext } from "react";
import UserItem from "./UserItem"; // UserItem import
import Spinner from "../layout/Spinner"; // Spinner import
import GithubContext from "../../context/github/githubContext";

// destructuring users & loading from props
const Users = () => {
  // initialise GithubContext
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridGap: "1rem",
};

export default Users;
