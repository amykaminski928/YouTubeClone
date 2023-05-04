import SearchBar from "../../components/SearchBar/SearchBar";
import React, {useEffect, useState} from "react";
import axios from "axios"
import { KEY } from "../../../src/localkey";



function SearchResultsPage({ searchTerm }) {
    const [searchResults, setSearchResults] = useState([]);

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


export default SearchResultsPage