// Page will fetch search results based on search term passed as state
// from SearchBar component.
// useLocation is: 

import SearchBar from "../../components/SearchBar/SearchBar";
import React, {useEffect, useState} from "react";
import axios from "axios"
import { KEY } from "../../../src/localkey";
import { useLocation } from "react-router-dom";


function SearchResultsPage() {
    const [searchResults, setSearchResults] = useState([]);
    const location = useLocation();
    const searchTerm = location.state.searchTerm;

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

}


export default SearchResultsPage