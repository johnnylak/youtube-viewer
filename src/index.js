import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCV-bI2WJrYTNGap_7GO4zbUt5jGDqUaRc';
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, 
    document.querySelector('.container'));