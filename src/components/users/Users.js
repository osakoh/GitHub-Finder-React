import React from "react";
import UserItem from "./UserItem"; // UserItem import
import Spinner from "../layout/Spinner"; // Spinner import
import PropTypes from "prop-types"; // PropType import: impt

// destructuring users & loading from props
const Users = ({ users, loading }) => {
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
// proptype
Users.proptypes = {
  users: PropTypes.array.isRequired, //ptar
  loading: PropTypes.bool.isRequired, //ptbr
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridGap: "1rem",
};

export default Users;
