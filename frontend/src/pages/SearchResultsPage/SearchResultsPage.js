// Page will fetch search results based on search term passed as state
// from SearchBar component.
// useLocation is: 

import SearchBar from "../../components/SearchBar/SearchBar";
import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KEY } from "../../localkey";
import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import './SearchResultsPage.css'

function SearchResultsPage({ searchTerm, onSearch }) {
    const [videos, setVideos] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("polyvagal exercises"); //Initial search
    const [selectedVideo, setSelectedVideo] =useState(null);
     const navigate = useNavigate();
     
    //  const onSearch = async(searchTerm) => {
       useEffect(( ) => {
        const fetchVideos = async () => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&maxResults=7`
            );
          
            setVideos(response.data.items);
            setSelectedVideo(response.data.items[0]);
        } catch (error) {
            console.log(error.message);
        }
    };

    fetchVideos();
}, [searchTerm]);

useEffect(() => {
    console.log(videos);
}, [videos]);
    // const onFormSubmit = (searchResults) => {
    //     setVideos(searchResults);
    // };
   
    // useEffect(() => {
      
       
    //    console.log('search term changed to: ', searchTerm);
    //    onSearch(searchTerm);
    //     console.log(selectedVideo);
    // }, [searchTerm]);
    
    const onVideoSelect = (video) => {
        navigate(`/${video.id.videoId}/`, { state: { video } });
        console.log('onVideoSelect in SearchResults called'); };
    
    useEffect(() => {
        console.log('selected video: ', selectedVideo);
    }, [selectedVideo]);

    return ( <div className="container">
        <SearchBar onSearch={onSearch} />
        
            <div className="search-results">
                {videos.length > 1 && (
                <RelatedVideos 
                    video={selectedVideo}
                    videos={videos.slice(1)}
                    onVideoSelect={onVideoSelect}
                    selectedVideo={selectedVideo}
                 />
                )}
            </div>         
    </div>
    );
};


export default SearchResultsPage;