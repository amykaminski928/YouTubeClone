
// basic logic to display video in both YouTubePage and SearchResultsPage
// Note to self: because this logic will be used in both pages use 'props' to
// pass the main and related videos to the parent components 
// (rather than 'Params' which makes the videoDisplay component 
// dependent on the URL parameters and reduce reusability.)

// Dosabled on 5/14: misconception of project in wireframe
// videos must be displayed differently on the search page and the youtubePage
// reorganized as display component for clicked video thumbnail

import React from "react";
// import { useLocation } from 'react-router-dom';
import RelatedVideos from '../RelatedVideos/RelatedVideos';
import MainVideo from "../MainVideo/MainVideo";

function VideoDisplay({ video, videos, onVideoSelect }) {
    // const location = useLocation();

    
    if (!video) {
        return <div>Loading...</div>;
    }

   
    return (
        <div>
            <div className="mainVideo">
               <MainVideo video={video} />
            </div>
            
            <div className="relatedVideos">
                <RelatedVideos videos={videos.slice(1)} onVideoSelect={onVideoSelect} />
            </div>
           
        </div>
    );   
};

export default VideoDisplay;
// function VideoDisplay({mainVideo, relatedVideos, fetchVideos}) {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [user, token] =useAuth(); 
   
    
//         useEffect(() => {
//         setIsLoggedIn(!!user);
//         fetchVideos();
//     }, [user, fetchVideos]);
//     const navigate = useNavigate();
    

//     const handleVideoClick = (item) => {
//         navigate(`/search/${item.id.videoId}`);
//     };    
//     return (
//         <div className="container">
//             <h3>{mainVideo.snippet.title}</h3>
//             <div className="main-video">
//                 <iframe
//                     title={`Video ${mainVideo.id.videoId}`}
//                     src={`https://www.youtube.com/embed/${mainVideo.id.videoId}`}
//                     width="560"
//                     height="315"
//                     frameBorder="0"
//                     allowFullScreen
//                 ></iframe>
//             <p>{mainVideo.snippet.description.substring(0, 150)}</p>
//                 <div> {isLoggedIn ? (
//                         <p>Logged in user can leave a comment here</p>
//                     ) : (
//                         <p>LogIn to leave a comment</p>
//                     )}</div>
//                 console.log(mainVideo);
//                 <Comments videoId={mainVideo.id.videoId} /> 
             
                      
//         </div>
//         <div className="related-videos">
//             {relatedVideos.map((item) => (
//                 <div key={item.id.videoId} className="related-video">
//                     <div className="iframe">
//                     <iframe
//                         title={item.snippet.title}
//                         src={`https://www.youtube.com/embed/${item.id.videoId}`}
//                         frameBorder="0"
//                         allowFullScreen
//                         onClick={() => handleVideoClick(item)}
//                     ></iframe>
//                 </div>
//                 <h4>{item.snippet.title}</h4>
//             </div>   
//                 ))}
//         </div>
//     </div>   
//     );
// };

// export default VideoDisplay;