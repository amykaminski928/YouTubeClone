// import useVideoSelection from "../../hooks/useVideoSelection";
// import changeMainVideo from "../../hooks/changeMainVideo";

import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { KEY } from "../../../src/localkey";
import SearchBar from "../../components/SearchBar/SearchBar";
//import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";
import { useLocation, useParams } from 'react-router-dom';

function YouTubePage({ searchTerm, onSearch }) {
    
    const [user, token] = useAuth();
    const [videos, setVideos] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { videoId } = useParams();
    const location = useLocation();
    const video = location.state ? location.state.video : null;
    const [selectedVideo, setSelectedVideo] = useState(location.state?.video || null)
    
    useEffect(() => {   
        const fetchVideos = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&maxResults=7`
                );
                setVideos(response.data.items);
            } catch (error) {
                console.log(error.message);
            }
        };
    
        fetchVideos();
    }, [searchTerm, selectedVideo]);

    const onVideoSelect = (video) => {
        if (videos.includes(video)) {
            const videoIndex = videos.indexOf(video);
            videos.splice(videoIndex, 0);
            videos.push(selectedVideo);
            setVideos([...videos]);
        }
        console.log('onVideoSelect is called', video);
        setSelectedVideo(video);
    };

    useEffect(() => {
        setIsLoggedIn(!!user);
        console.log(selectedVideo);
    }, [user, searchTerm]);
    
    
    return (  
    <div className="container">
        <div className="Search-bar">
            <SearchBar onSearch={onSearch} />
        </div>
        <div className="Video-Display">
            {videos.length > 0 && (
            <VideoDisplay 
                selectedVideo={selectedVideo}
                videos={videos}
                onVideoSelect={onVideoSelect}
                user={user}
                isLoggedIn={isLoggedIn}
            />
                )}
        </div> 
        {/* <div className="Related-Videos">
            {videos.length > 0 && (
                <RelatedVideos 
                    video={selectedVideo}
                    videos={videos.slice(0)}
                    onVideoSelect={onVideoSelect}
                    selectedVideo={selectedVideo}
                /> 
            )}  
        </div> */}
    </div>

);
}
export default YouTubePage;

 