import React from "react";
import { useParams } from "react-router-dom";

function VideoPage() {
    const { videoId } = useParams();
    return (
        <div>
            <iframe
                title={`Video ${videoId}`}
                src={`https://www.youtube.com/embed/${videoId}`}
                width="560"
                height="315"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default VideoPage;