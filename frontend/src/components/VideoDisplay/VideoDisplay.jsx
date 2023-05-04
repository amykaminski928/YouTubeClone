
// basic logic to display video in both YouTubePage and SearchResultsPage
// Note to self: because this logic will be used in both pages use 'props' to
// pass the main and related videos to the parent components 
// (rather than 'Params' which makes the videoDisplay component 
// dependent on the URL parameters and reduce reusability.)

import React from "react";
import useAuth from "../../hooks/useAuth";
import Comments from "../Comments"

function VideoDisplay({mainVideo, relatedVideos}) {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
        // useEffect(() => {
    //     setIsLoggedIn(!!user);
    //     fetchVideos();
    // }, [user]);
        
    return (
        <div className="container">
            <h3>{mainVideo.snippet.title}</h3>
            <div classname="main-video">
                <iframe
                    title={`Video ${mainVideo.id.videoId}`}
                    src={`https://www.youtube.com/embed/${mainVideo.id.videoId}`}
                    width="560"
                    height="315"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
                {/* <div> {isLoggedIn ? (
                        <p>Logged in user can leave a comment here</p>
                    ) : (
                        <p>LogIn to leave a comment</p>
                    )}</div> */}
            <p>{mainVideo.snippet.description.substring(0, 150)}</p>            
        </div>
        <div className="related-videos">
            {relatedVideos.map((item) => (
                <div key={item.id.videoID} className="related-video">
                    <div className="iframe">
                    <iframe
                        title={item.snippet.title}
                        src={`https://www.youtube.com/embed/${item.id.videoId}`}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <h4>{item.snippet.title}</h4>
            </div>   
                ))}
        </div>
    </div>   
    );
};

export default VideoDisplay;