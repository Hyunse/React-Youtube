import React, { Component } from 'react';
// const Component = React.Component; // Syntactic sugar

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    
    // Render
    render() {
        return (
            <div>
                <input onChange={event => this.setState({ term: event.target.value })} />
                value : {this.state.term}
            </div>
        );
    }
}

export default SearchBar;