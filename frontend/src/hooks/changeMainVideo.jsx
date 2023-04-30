import { useState } from "react";

const useChangeMainVideo = (initialVideos) => {
    const [videos, setVideos] = useState(initialVideos);

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