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
import axios from 'axios';
import { KEY } from '../../localkey';

//this component allows the user to search for videos:
const SearchBar = ({ onFormSubmit }) => {
   
    const [searchTerm, setSearchTerm] = useState("poyvagal exercises"); //Initial search
    const [searchResults, setSearchResults] = useState([]);
    // const location = useLocation();
    // const searchTerm = location.state?.searchTerm;

    const performSearch = async () => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&maxResults=5`
            );
            setSearchResults(response.data.items);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        performSearch();
    }, [searchTerm]);
    // function to perform search when form is submitted.
    const onSubmit = event => {
        event.preventDefault();
        performSearch();
    };

    return (
        <div className="search-bar">
            <form onSubmit={onSubmit} classname="search-form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={event => setSearchTerm(event.target.value)}
                    />
                </div>
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