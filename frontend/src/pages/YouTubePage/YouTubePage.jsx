// import useVideoSelection from "../../hooks/useVideoSelection";
// import changeMainVideo from "../../hooks/changeMainVideo";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { KEY } from "../../../src/localkey";
import VideoDisplay from "../../components/VideoDisplay/VideoDisplay"
import Comments from "../../components/Comments/Comments"

// temporary JSON File for data placeholder while in production
import videoData from '../../Data/videoData.json';
// import useChangeMainVideo from "../../hooks/changeMainVideo";

function YouTubePage() {
    
    const [user, token] = useAuth();
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const [relVideos, changeMainVideo] = useChangeMainVideo(videoData.items);
    // FOR LIVE DATA PULLING WHEN PROJECT CORRECTLY STYLED
    useEffect(() => {
        setIsLoggedIn(!!user);
        fetchVideos();
    }, [user]);
        
    const fetchVideos = async () => {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?q=polyvagal%exercises&key=${KEY}&part=snippet&maxResults=5`
            );
            setVideos(response.data.items);
            setSelectedVideo(response.data.items[0]);
            
            // **to pull json data for styling** console.log(JSON.stringify(response.data, null, 2));
        } catch (error) {
            console.log(error.message);
        }
    };
    // BELOW IS CODE FOR USING STORED DATA RATHER THAN REQUESTS FROM API:
    // const loadVideoData = () => {
    //     setVideos(videoData.items);
    // };
    // useEffect(() => {
    //     loadVideoData();
    // }, []);

    return (
        <div className="container">
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

 