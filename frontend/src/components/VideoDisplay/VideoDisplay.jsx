
// basic logic to display video in both YouTubePage and SearchResultsPage
// Note to self: because this logic will be used in both pages use 'props' to
// pass the main and related videos to the parent components 
// (rather than 'Params' which makes the videoDisplay component 
// dependent on the URL parameters and reduce reusability.)

// Dosabled on 5/14: misconception of project in wireframe
// videos must be displayed differently on the search page and the youtubePage
// reorganized as display component for clicked video thumbnail

import React from "react";
// import { useLocation } from 'react-router-dom';
import RelatedVideos from '../RelatedVideos/RelatedVideos';
import MainVideo from "../MainVideo/MainVideo";
import Comments from "../Comments/Comments";
import useAuth from "../../hooks/useAuth";

function VideoDisplay({ selectedVideo, videos, onVideoSelect, user, isLoggedIn }) {
    console.log("VideoDisplay", selectedVideo);
    
    
    if (!selectedVideo) {
        return <div>Loading...</div>;
    }
   
    return (
        <div>
            <iframe className="mainVideo" title="video player" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}/`}>
               <MainVideo video={selectedVideo} />
            </iframe>
            <Comments video={selectedVideo} user={user} isLoggedIn={isLoggedIn} />
            <div className="relatedVideos">
                <RelatedVideos 
                selectedVideo={selectedVideo}
                videos={videos.slice(1, 6)} 
                onVideoSelect={onVideoSelect}
                />
            </div>
           
        </div>
    );   
};

export default VideoDisplay;
