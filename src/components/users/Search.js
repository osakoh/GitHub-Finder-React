import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
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
        return (
            <form onSubmit={this.onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search User"
                    value={this.state.text}
                    onChange={this.onChange}
                />
                <input type="submit" value="Search" className="btn btn-black btn-block" />
            </form>
        )
    }
}

export default Search
