import React from "react";
import VideoItem from "../VideoItem/VideoItem";

// This component will represent a single video in the search list

const RelatedVideos = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;     
    
};

export default RelatedVideos;