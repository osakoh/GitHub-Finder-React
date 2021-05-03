import React, { useState, useContext } from "react";
import PropTypes from "prop-types"; // PropType import: impt
import GithubContext from "../../context/github/githubContext";

// props are passed into the parenthesis in a functional component
// destructuring showClearBtn & clearUsers from props
const Search = ({ showAlert }) => {
  // initialise GithubContext
  const githubContext = useContext(GithubContext);

  // defining the state- Syntax: [inputName, setInputName]=useState('');
  const [text, setText] = useState("");

  // event listener for the form
  const onSubmit = (e) => {
    e.preventDefault();

    // validates the input and ensures a text has been inputted
    if (text === "") {
      showAlert("Empty input! Cannot search", "danger");
    } else {
      // call searchUsers from the githubContext
      githubContext.searchUsers(text);
      // clear the search field
      setText("");
    }
  };

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
        <input
          type="submit"
          value="Search"
          className="btn btn-black btn-block btn-sm"
        />
      </form>
      {/* clear btn */}
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-dark btn-block btn-sm"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

// proptype for searchUsers
Search.propTypes = {
  showAlert: PropTypes.func.isRequired,
};

export default Search;
