import React from 'react';

const MainVideo = ({ video }) => {
    if (!video) return <div>Loading...</div>;

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <iframe title="video player" src={videoSrc} />
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    );
};

export default MainVideo;
