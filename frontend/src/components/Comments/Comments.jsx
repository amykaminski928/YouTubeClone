// This component will fetch comments from the backend
// Display fetched comments 
// contain a form for submitting comments if user is logged in

import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth"
// import "..Comments.css";
import axios from "axios";


const Comments = ({ videoId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [user, token] = useAuth();
    
    useEffect(() => {

        const fetchComments = async () => {
            const response = await axios.get('http://localhost:3000/api/comments/')
            setComments(response.data);
          };
          fetchComments();
        }, [videoId]);


return ( 
    <div className="comments">
        <h4>Comments</h4>
        {comments.map((comment) => (
            <div key={comment.id} classname="comment">
                <p>{comment.content}</p>
           </div>
        ))}
    </div>
    );
};
export default Comments;

