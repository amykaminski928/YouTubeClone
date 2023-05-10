// This component will fetch comments from the backend
// Display fetched comments 
// contain a form for submitting comments if user is logged in

import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
// import "..Comments.css";
import axios from "axios";
import useCustomForm from "../../hooks/useCustomForm";


const Comments = ({videoId}) => {
    const [comments, setComments] = useState([]);
    const [user, token] = useAuth();

    const fetchComments = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/comments/${videoId}`);
            setComments(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        fetchComments();
    }, [videoId]);

    
    
    async function submitComment(data) {
        if (!user) {
            console.log("not logged in");
            return;
        }
        try {
            await axios.post(`http://localhost:3000/api/`, {
            ...data,
            videoId,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

    
    reset();
    fetchComments();
    } catch (error) {
        console.log(error);
    }
}

const [formData, handleInputChange, handleSubmit, reset] = useCustomForm({
    comment: "",
}, submitComment);

return ( 
    <div className="comments">
        <h4>Comments</h4>
        {comments.map((comment) => (
            <div key={comment.id} className="comment">
                <p>{comment.content}</p>
           </div>
        ))}
        (user && (
            <form onSubmit={handleSubmit}>
                <textarea
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                placeholder="Your comment"
                />
                <button type="submit">Submit</button>
            </form>
        ))
    </div>
    );
};
export default Comments;

