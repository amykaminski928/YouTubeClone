// import useVideoSelection from "../../hooks/useVideoSelection";
import changeMainVideo from "../../hooks/changeMainVideo";
import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { KEY } from "../../../src/localkey";


// temporary JSON File for data placeholder while in production
import videoData from '../../Data/videoData.json';
import useChangeMainVideo from "../../hooks/changeMainVideo";

function YouTubePage() {
    
    const [user, token] = useAuth();
    const [videos, setVideos] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [relVideos, changeMainVideo] = useChangeMainVideo(videoData.items);

    const handleVideoclick = changeMainVideo;
    
    // FOR LIVE DATA PULLING WHEN PROJECT CORRECTLY STYLED
    // useEffect(() => {
    //     setIsLoggedIn(!!user);
    //     fetchVideos();
    // }, [user]);
        
    // const fetchVideos = async () => {
    //     try {
    //         let response = await axios.get(
    //             `https://www.googleapis.com/youtube/v3/search?q=polyvagal%exercises&key=${KEY}&part=snippet&maxResults=5`
    //         );
    //         setVideos(response.data.items);
    //         // **to pull json data for styling** console.log(JSON.stringify(response.data, null, 2));
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };
    // BELOW IS CODE FOR USING STORED DATA RATHER THAN REQUESTS FROM API:
    const loadVideoData = () => {
        setVideos(videoData.items);
    };
    useEffect(() => {
        loadVideoData();
    }, []);

    return (
        <div className="container">
            <h1>Video Landing Page</h1>
            {videos && (
                <div className="main-video">
                    <iframe
                        title = {videos[0]?.snippet.title}
                        src={`https://www.youtube.com/embed/${videos[0]?.id.videoId}`}
                        width="500"
                        height="315"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                    <h3>{videos[0]?.snippet.title}</h3>
                    <p>{videos[0]?.snippet.description.substring(0, 150)}</p>
                    {isLoggedIn ? (
                        <p>Logged in user can leave a comment here</p>
                    ) : (
                        <p>LogIn to leave a comment</p>
                    )}
                </div>
            )}
            <div className="related-videos">           
                {videos.slice(1).map((item) => (
                    <div key={item.id.videoId} 
                    className="related-video"
                    onClick={() => handleVideoclick(item)} >
                        <div classname="iframe-wrapper">
                        <iframe
                            title={item.snippet.title}
                            src={`https://www.youtube.com/embed/${item.id.videoId}`}
                            frameborder="0"
                            allowFullScreen
                        ></iframe> 
                        </div> 
                            <h4>{item.snippet.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
    }
export default YouTubePage;

 