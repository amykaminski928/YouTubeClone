import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const YouTubePage = () => {
    
    const [user, token] = useAuth()
    const [videos, setVideos] = useState([]):

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try{
            let response = await axios.get(
                "https://www.googleapis.com/youtube/v3/search?q=polyvagal&key=AIzaSyCwKxim-LbxsYt7D8Lbkp7dFGOL6ZQ7cNg&part=snippet", 
        )};
        setVideos(response.data);
        } catch (error) {
            console.log(error.response.data);
        }

} 
