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


function YouTubePage() {
    
    const [user, token] = useAuth();
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchTerm, setSearchTerm] = useState("poyvagal exercises"); //Initial search
   
    useEffect(() => {
        setIsLoggedIn(!!user);
        fetchVideos();
    }, [user, searchTerm]);
        
    const fetchVideos = async () => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&maxResults=5`
            );
            setVideos(response.data.items);
            setSelectedVideo(response.data.items[0]);
            
            // **to pull json data for styling** console.log(JSON.stringify(response.data, null, 2));
        } catch (error) {
            console.log(error.message);
        }
    };
    const onVideoSelect = (video) => {
        setSelectedVideo(video);
        fetchVideos();//refetch videos when a new video is selected
    };

    const onSearchSubmit =(term) => {
        setSearchTerm(term)
    };

    return (
        <div className="container">
            <SearchBar onSearchSubmit={onSearchSubmit} />
            {selectedVideo && (
                <div>
                <VideoDisplay
                    video={selectedVideo}
                    onVideoSelect={onVideoSelect}
                    relatedVideos={videos.slice(1)}
                />
                <Comments video={selectedVideo} user={user} isLoggedIn={isLoggedIn} />
            </div>
            )}            
        </div>
    );
}
export default YouTubePage;

 