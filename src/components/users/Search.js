import React, { useState } from 'react';
import PropTypes from 'prop-types' // PropType import: impt

// props are passed into the parenthesis in a functional component 
// destructuring showClearBtn & clearUsers from props
const Search = ({ showClearBtn, clearUsers, searchUsers, showAlert }) => {

    // defining the state- Syntax: [inputName, setInputName]=useState('');
    const [text, setText] = useState('');

    // event listener for the form
    const onSubmit = e => {
        e.preventDefault();

        // validates the input and ensures a text has been inputted
        if (text === '') {
            showAlert('Empty input! Cannot search', 'danger');
        } else {
            // passing props upwards to the app js
            searchUsers(text);
            // clear the search field
            setText('');
        }

    }

    // event listener to get user's input
    const onChange = (e) => setText(e.target.value);


    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search User"
                    value={text}
                    onChange={onChange}
                />
                <input type="submit" value="Search" className="btn btn-black btn-block btn-sm" />
            </form>
            {/* clear btn */}
            {showClearBtn && <button className="btn btn-dark btn-block btn-sm" onClick={clearUsers}>Clear</button>}
        </div>
    );
}

// proptype for searchUsers
Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClearBtn: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired,
};

export default Search;
