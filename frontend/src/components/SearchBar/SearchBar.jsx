// should be visible on every page.  connect to nav bar in the app
import React from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar