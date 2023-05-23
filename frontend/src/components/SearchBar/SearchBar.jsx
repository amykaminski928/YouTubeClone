// should be visible on every page.  
// connect to nav bar in the app??
// update 5/4/23: Keep search bar separate from NavBar
// Use this concept for organizing pages: 
// Searching logic code in SearchBar.js component
// --use 'useNavigate' hook from 'react-router-dom' 
// to navigate to SearchResultsPage after search is completed
// Try passing the search term as a state Param when 
// navigating to the searchResultsPage.

import React, { useState, useEffect } from 'react';


//this component allows the user to search for videos:
const SearchBar = ({ onSearch }) => {
   
    const [searchTerm, setSearchTerm] = useState(""); 
    
    
    const onSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

   

    return (
        <div className="search-bar">
            <form onSubmit={onSubmit} className="search-form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={event => setSearchTerm(event.target.value)}
                    />
                    <p>State your terms in the Search Bar above!</p>
                </div>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
// const SearchBar = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         navigate(`/search/`, { state: {searchTerm } });
//     };
  
//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//             type="text"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={(event) => setSearchTerm(event.target.value)}
//             />
//             <button type="submit">Search</button>
//         </form>
//     );
// };

// export default SearchBar