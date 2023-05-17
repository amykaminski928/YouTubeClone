import React from "react";
import VideoItem from "../VideoItem/VideoItem";

// This component will represent a single video in the search list

const RelatedVideos = ({ videos, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item">
            {videos.map((video) => {
                <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
            })}
        </div>
    );
};

export default RelatedVideos;