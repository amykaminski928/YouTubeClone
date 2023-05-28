import React from "react";
import VideoItem from "../VideoItem/VideoItem";

// This component will represent a single video in the search list

const RelatedVideos = ({ videos, onVideoSelect, selectedVideo }) => {
    const renderedList = videos
    .filter((video, index) => 
        index < 4 && selectedVideo && video.id.videoId !== selectedVideo.id.videoId)
        .map((video) => {
            return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />   
        });
        

    return <div className="video-set">{renderedList}</div>;     
    
};

export default RelatedVideos;