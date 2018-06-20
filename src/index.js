import React from 'react';
import ReactDom from 'react-dom';

// components
import SearchBar from './components/search_bar.js';

// Youtube API Key
const API_KEY = 'AIzaSyBUVWbAMNmUNILhvxr3QrtV7PcfUI7PFTM';

// Step 1. Create new Components
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Step 2. Take this component to HTML
ReactDom.render(<App/>, document.querySelector('.container'));