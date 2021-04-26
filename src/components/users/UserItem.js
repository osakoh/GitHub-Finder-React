import React from 'react'
import PropTypes from 'prop-types';

// destructuring: taking out specifics from the user object
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
            <h3>{login}</h3>
            <div>
                <a href={html_url} className="btn btn-black btn-sm my-1">More</a>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem;

/** snippets
 * ptor:  PropTypes.object.isRequired,
 * pto: PropTypes.object,
 * pts: PropTypes.string,
 * ptsr: PropTypes.string.isRequired,
 * pta: PropTypes.array,
 * ptar: PropTypes.array.isRequired,
 *
 * rce: class based component that exports at the bottom
*/