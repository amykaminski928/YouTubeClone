
// Hook to reuse the videos on the page (sort of shuffle
// them around from 'main video' to 'related videos') within the
// user's experience of the same page without reloading from 
// the 3rd Party API.


// ***This was not working the way that I had intended.  
// ***Trying a new custom hook : changeMainVideo

// import { useNavigate } from 'react-router-dom';

// export default function useVideoSelection() {
//     const navigate = useNavigate();

//     const handleVideoClick = (videoId) => {
//         navigate(`/video/&{videoId}`);
//     };
//     return { handleVideoClick };
// }

