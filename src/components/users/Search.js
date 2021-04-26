import React, { Component } from 'react';
import PropTypes from 'prop-types' // PropType import: impt


class Search extends Component {
    state = {
        text: ''
    }

    // proptype for searchUsers
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClearBtn: PropTypes.bool.isRequired,
    }

    // event listener for the form
    onSubmit = e => {
        e.preventDefault();
        // passing props upwards to the app js
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' });
    }

    // event listener to get user's input
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        // destructuring showClearBtn & clearUsers from props
        const { showClearBtn, clearUsers } = this.props;

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search User"
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Search" className="btn btn-black btn-block btn-sm" />
                </form>
                {/* clear btn */}
                {showClearBtn && <button className="btn btn-dark btn-block btn-sm" onClick={clearUsers}>Clear</button>}
            </div>
        );
    }
}

export default Search;
