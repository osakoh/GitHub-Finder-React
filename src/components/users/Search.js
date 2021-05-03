import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

// props are passed into the parenthesis in a functional component
// destructuring showClearBtn & clearUsers from props
const Search = () => {
  // initialise Context(Github & Alert)
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  // defining the state- Syntax: [inputName, setInputName]=useState('');
  const [text, setText] = useState("");

  // event listener for the form
  const onSubmit = (e) => {
    e.preventDefault();

    // validates the input and ensures a text has been inputted
    if (text === "") {
      alertContext.setAlert("Empty input! Cannot search", "danger");
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

export default Search;
