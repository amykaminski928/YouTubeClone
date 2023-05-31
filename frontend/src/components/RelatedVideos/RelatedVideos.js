import React from "react";
import VideoItem from "../VideoItem/VideoItem";

// This component will represent a single video in the search list

const RelatedVideos = ({ videos, onVideoSelect, selectedVideo }) => {
    console.log("Received videos:", videos); // Check if videos are received

    const renderedList = videos
        .filter((videos, index) => {
            console.log("Processing video:", videos); // Check each video being processed
            return index < 10 && (!selectedVideo || videos.id.videoId !== selectedVideo.id.videoId)
        })
        .map((video) => {
            console.log("Rendering video item:", video); // Check each video being rendered
            return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />;
        });
    console.log("Rendered list:", renderedList);
    return <div className="video-set">{renderedList}</div>;     
};


export default RelatedVideos;