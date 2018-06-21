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
            <div className="search-bar">
                <input onChange={event => this.onInputChange(event.target.value)} />
                value : {this.state.term}
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTerm(term);
    }
}

export default SearchBar;