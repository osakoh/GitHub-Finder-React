import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// destructuring: taking out specifics from the user object
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-black btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

/** snippets
 * ptor:  PropTypes.object.isRequired,
 * pto: PropTypes.object,
 * pts: PropTypes.string,
 * ptsr: PropTypes.string.isRequired,
 * pta: PropTypes.array,
 * ptar: PropTypes.array.isRequired,
 *
 * racf: functional component
 * rce: class based component that exports at the bottom
 *
 */
