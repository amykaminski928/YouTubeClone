// Page will fetch search results based on search term passed as state
// from SearchBar component.
// useLocation is: 

import SearchBar from "../../components/SearchBar/SearchBar";
import React from "react";
import { useState } from 'react';
import RelatedVideo from "../../components/RelatedVideo/RelatedVideo";


function SearchResultsPage() {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onFormSubmit = (searchResults) => {
        setVideos(searchResults);
        setSelectedVideo(search[0]);
    };

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return ( <div className="container">
        <SearchBar onFormSubmit={onFormSubmit} />
        (selectedVideo && (
            <div>
            <RelatedVideo
                video={selectedVideo}
                onVideoSelect={onVideoSelect}
                relatedVideos={videos.slice(1)}
            />
        </div>
        )}            
    </div>
    );
};


export default SearchResultsPage