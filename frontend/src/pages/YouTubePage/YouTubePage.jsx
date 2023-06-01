// import useVideoSelection from "../../hooks/useVideoSelection";
// import changeMainVideo from "../../hooks/changeMainVideo";

import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { KEY } from "../../../src/localkey";
import SearchBar from "../../components/SearchBar/SearchBar";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
// import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";
import { useLocation, useParams } from 'react-router-dom';
import MainVideo from "../../components/MainVideo/MainVideo";
import Comments from "../../components/Comments/Comments";

function YouTubePage({ searchTerm, onSearch }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    // const [user, token] = useAuth();
    // const { id: { videoId } } = selectedVideo;
    const [user, token] = useAuth();
    const [videos, setVideos] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { videoId } = useParams();
    const location = useLocation();
    const initialVideo = location.state?.video || null;
    const [selectedVideo, setSelectedVideo] = useState(initialVideo);
    const { username } = useParams;
    useEffect(() => {   
        const fetchVideos = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&maxResults=7`
                );
                setVideos(response.data.items);
            } catch (error) {
                console.log(error.message);
            }
        };
    
        fetchVideos();
    }, [searchTerm, selectedVideo, videoId]);

    const onVideoSelect = (video) => {
        if (videos.includes(video)) {
            const videoIndex = videos.indexOf(video);
            videos.splice(videoIndex, 0);
            videos.push(selectedVideo);
            setVideos([...videos]);
        }
        console.log('onVideoSelect is called', video);
        setSelectedVideo(video);
    };

    useEffect(() => {
        console.log('comments are trying to call')
        const fetchComments = async () => {
            if (selectedVideo) {
            try {
            const response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}/`, 
            {
                headers: {
                    Authorization: "Bearer" + token,
                },
            }
        );
            setComments(response.data);
            } catch (error) {
                console.log(error.message);
            }
            }
        };
        

        fetchComments();
    }, [selectedVideo, videoId, username]);
        console.log("This is the way we fetch comments",selectedVideo, videoId, username);

    const onSubmit = async event => {
        event.preventDefault();
        console.log("user:", user);
        console.log("video:", selectedVideo);
        if (!isLoggedIn) {
            alert("Please log in to post a comment.");
            return;
        }
        
        try{
            await axios.post(`http://127.0.0.1:8000/api/comments/`, 
                {   
                    selectedVideo: selectedVideo,
                    video_id: selectedVideo.videoId,
                    user: user.id,
                    username: user.username,
                    text: newComment,
                },
                {
                    headers: {
                        Authorization: "Bearer" + token,
                    },
                }
            );
            setNewComment('');
            // fetchComments();
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        setIsLoggedIn(!!user);
        console.log(selectedVideo);
    }, [user, selectedVideo]);
    


    return (  
    <div className="container">
        <div className="search-bar">
            <SearchBar onSearch={onSearch} />
        </div>
   
        <div className="main-video">
            {videos.length > 0 && (
            <MainVideo video={selectedVideo} />
                )}
        </div> 
        <div className="comments">
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={newComment}
                    onChange={(event) => setNewComment(event.target.value)}
                    placeholder="Add a comment.."
                />
                <button type="submit">Post</button>
            </form>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>
                        <strong>{user.username}:</strong>{comment.text}</li>
                ))}
            </ul>
        </div>
            {/* {selectedVideo > 0 && (
                <Comments 
                selectedVideo={selectedVideo}
                isLoggedIn={isLoggedIn}
                />
            )} */}

        </div>
        <div className="Related-Videos">
            {videos.length > 0 && (
                <RelatedVideos 
                    video={selectedVideo}
                    videos={videos.slice(1)}
                    onVideoSelect={onVideoSelect}
                    selectedVideo={selectedVideo}
                /> 
            )}  
        </div>
    </div>

);
}
export default YouTubePage;

 