// This component will fetch comments from the backend
// Display fetched comments 
// contain a form for submitting comments if user is logged in

import React, { useState, useEffect } from "react";

// import "..Comments.css";
import axios from "axios";



const Comments = ({ video, user }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    // const [user, token] = useAuth();
    
    //Fetch comments when the video changes: 
    useEffect(() => {
        const fetchComments = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/api/comments/${video.videoId}`);
            setComments(response.data);
        };

        fetchComments();
    }, [video]);

    // function to handle form submission:

    const onSubmit = async event => {
        event.preventDefault();
        if (!user) {
            alert("Please log in to post a comment.");
            return;
        }
        
        await axios.post(`http://127.0.0.1:8000/api/comments`, {
            videoId: video.id.videoId,
            userId: user.id,
            comment: newComment
        });
        setNewComment('');
    };
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={newComment}
                    onChange={event => setNewComment(event.target.value)}
                    placeholder="Add a comment.."
                />
                <button type="submit">Post</button>
            </form>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
    };
    
    export default Comments;
//         const fetchComments = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}`);
//                 setComments(response.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         useEffect(() => {
//             fetchComments();
//         }, [videoId]);

    
    
//     async function submitComment(data) {
//         if (!user) {
//             console.log("not logged in");
//             return;
//         }
//         try {
//             await axios.post(`http://127.0.0.1:8000/api/`, {
//             content: data.comment,
//             }, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 },
//             });

    
//     reset();
//     fetchComments();
//     // const response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}`);
//     // setComments(response.data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// const [formData, handleInputChange, handleSubmit, reset] = useCustomForm({
//     comment: "",
// }, submitComment);

// return ( 
//     <div className="comments">
//         <h4>Comments</h4>
//         {comments.map((comment) => (
//             <div key={comment.id} className="comment">
//                 <p>{comment.content}</p>
//            </div>
//         ))}
//         {user && (
//             <form onSubmit={handleSubmit}>
//                 <textarea
//                 name="comment"
//                 value={formData.comment}
//                 onChange={handleInputChange}
//                 placeholder="Your comment"
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         )}
//     </div>
//     );
// };
// export default Comments;

