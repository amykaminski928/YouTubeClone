import {useHistory} from 'react-router-dom';

const useVideoSelection = () => {
    const history = useHistory();

    const handleVideoClick = (videoId) => {
        history.push(`/video/&{videoId}`);
    };
    return { handleVideoClick };
};

export default useVideoSelection;