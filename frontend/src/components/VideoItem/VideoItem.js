import React from "react";
import "./VideoItem.css";

// This component will represent a single video in the search list

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => {  onVideoSelect(video)}} className="video-item">
            <img 
                alt={video.snippet.title}
                className="thumbnail"
                src={video.snippet.thumbnails.medium.url}
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;