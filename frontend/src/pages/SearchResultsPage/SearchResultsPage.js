// Page will fetch search results based on search term passed as state
// from SearchBar component.
// useLocation is: 

import SearchBar from "../../components/SearchBar/SearchBar";
import React from "react";
import { useState } from 'react';
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import MainVideo from "../../components/MainVideo/MainVideo";

function SearchResultsPage() {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onFormSubmit = (searchResults) => {
        setVideos(searchResults);
        setSelectedVideo(searchResults[0]);
    };

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return ( <div className="container">
        <SearchBar onFormSubmit={onFormSubmit} />
        
            <div className="search-results">
                <MainVideo video={selectedVideo} />
                <RelatedVideos
                    
                    onVideoSelect={onVideoSelect}
                    videos={videos.slice(1)}
                />
            </div>         
    </div>
    );
};


export default SearchResultsPage