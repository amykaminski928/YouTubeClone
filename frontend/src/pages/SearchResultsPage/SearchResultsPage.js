// Page will fetch search results based on search term passed as state
// from SearchBar component.
// useLocation is: 

import SearchBar from "../../components/SearchBar/SearchBar";
import React from "react";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";


function SearchResultsPage() {
    const [videos, setVideos] = useState([]);
     const history = useHistory();

    const onFormSubmit = (searchResults) => {
        setVideos(searchResults);
    };

    const onVideoSelect = (video) => {
        history.push('/video', { video });
    };

    return ( <div className="container">
        <SearchBar onFormSubmit={onFormSubmit} />
        
            <div className="search-results">
              
                <RelatedVideos
                    
                    onVideoSelect={onVideoSelect}
                    videos={videos.slice(1)}
                />
            </div>         
    </div>
    );
};


export default SearchResultsPage