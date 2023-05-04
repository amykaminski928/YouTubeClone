import { useState } from "react";


import videoData from "../Data/videoData.json";

const useChangeMainVideo = () => {
    const [videos, setVideos] = useState(videoData.items);

    const changeMainVideo = (newMainVideo) => {
        const newVideos = videos.map((video) => {
            if (video.id.videoId === newMainVideo.id.videoId) {
                return videos[0];
            }
            return video;
        });

        newVideos[0] = newMainVideo;
        setVideos(newVideos);
    };

    return [videos, changeMainVideo];
};

export default useChangeMainVideo;