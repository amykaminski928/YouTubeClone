// import useVideoSelection from "../../hooks/useVideoSelection";
// import changeMainVideo from "../../hooks/changeMainVideo";

import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { KEY } from "../../../src/localkey";
import VideoDisplay from "../../components/VideoDisplay/VideoDisplay"
import Comments from "../../components/Comments/Comments"
import SearchBar from "../../components/SearchBar/SearchBar";
import { useLocation, useParams } from 'react-router-dom';

function YouTubePage({ searchTerm, onSearch }) {
    
    const [user, token] = useAuth();
    const [videos, setVideos] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
   
    
    const { videoId } = useParams();
    const location = useLocation();
    const video = location.state ? location.state.video : null;
   
    const [selectedVideo, setSelectedVideo] = useState(location.state?.video || null)
    
    // const onSearch = async(term) => {
    useEffect(() => {   
        const fetchVideos = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&maxResults=7`
                );
              
                setVideos(response.data.items);
                // setSelectedVideo(response.data.items[0]);
            } catch (error) {
                console.log(error.message);
            }
        };
    
        fetchVideos();
    }, [searchTerm, selectedVideo]);


    // performSearch when form is submitted.
    // useEffect(() => {
    //     if(isSubmitted) {
    //         performSearch(searchTerm);
    //         setIsSubmitted(false);
    //     }
    // }, [isSubmitted]);
    useEffect(() => {
        setIsLoggedIn(!!user);
        // fetchVideos();
        console.log(selectedVideo);
    }, [user, searchTerm]);
        
    // const fetchVideos = async () => {
    //     try {
    //         const response = await axios.get(
    //             `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&maxResults=5`
    //         );
    //         setVideos(response.data.items);
    //         setSelectedVideo(response.data.items[0]);
            
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };

    const onVideoSelect = (video) => {
        if (videos.includes(video)) {
            const videoIndex = videos.indexOf(video);
            videos.splice(videoIndex, 1);
            videos.push(selectedVideo);
            setVideos([...videos]);
        }
        console.log('onVideoSelect is called', video);
        setSelectedVideo(video);
    };

    useEffect(() => {
        console.log('useEffect is triggered', selectedVideo);
    }, [selectedVideo]);
    
    return ( 
      
    <div className="container">
          <div className="Search-bar">
            <SearchBar onSearch={onSearch} />
        </div>
            {videos.length > 0 && (
            <VideoDisplay
            video={selectedVideo}
            videos={videos.slice(1)}
            onVideoSelect={onVideoSelect}
            selectedVideo={selectedVideo}
    />
            )}
            <Comments video={selectedVideo} user={user} isLoggedIn={isLoggedIn} />
        </div>

);
}
export default YouTubePage;

 