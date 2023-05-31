// This component will fetch comments from the backend
// Display fetched comments 
// contain a form for submitting comments if user is logged in

import React, { useState, useEffect } from "react";

import "./Comments.css";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const Comments = ({ selectedVideo, isLoggedIn }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [user, token] = useAuth();
    
    //Fetch comments when the video changes: 
    
        const fetchComments = async () => {
            if (selectedVideo.videoId) {
            try {
            const response = await axios.get(`http://127.0.0.1:8000/api/comments/${selectedVideo.videoId}/`);
            setComments(response.data);
            } catch (error) {
                console.log(error.message);
            }
            }
        };

    useEffect(() => {
        if (selectedVideo)
        fetchComments();
    }, [selectedVideo]);

    // function to handle form submission:

    const onSubmit = async event => {
        event.preventDefault();
        console.log("user:", user);
        console.log("video:", selectedVideo);
        if (!user) {
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
            console.log(error);
        }
    };
    
    return (
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
                        <strong>{comment.user.username}:</strong>{comment.text}</li>
                ))}
            </ul>
        </div>
    );
};
    
    export default Comments;