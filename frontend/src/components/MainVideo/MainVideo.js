import React from 'react';

const MainVideo = ({ video }) => {
    if (!video) return <div>Loading...</div>;

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    const getDescription = (video) => {
        try {
            return video.snippet.description.substring(0, 150);
        } catch (error){
            console.log(error);
            return "No Description Available";
        }
    };

    return (
        <div>
            <iframe title="video player" src={videoSrc} />
            <h4>{video.snippet.title}</h4>
            <p>{getDescription(video)}...</p>
        </div>
    );
};

export default MainVideo;
