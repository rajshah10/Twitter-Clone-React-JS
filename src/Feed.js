import React, { useState ,useEffect} from 'react'
import "./Feed.css"
import Post from './Post'
import TweetBox from './TweetBox'
import FlipMove from "react-flip-move";
import { useSelector } from 'react-redux';
import db from "./firebase"
const Feed = () => {
    const user=useSelector(state=>state.auth.user)
    const [posts,setPosts]=useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);

    
    return (
        <>
        <div className="feed">
            <div className="feed__header">
                <h2>Home  <span style={{fontSize:"13px",color:"gray",fontWeight:'lighter',fontFamily:"sans-serif"}}>/ {user?.name}</span></h2>
            </div>
            <TweetBox/> 
           <FlipMove>
            {posts.map(post=>(
                <Post
                key={post.text}
                displayName={user?.name}
                username={post.uname}
                verified={post.verified}
                text={post.text}
                image={post.image}
                avatar={user?.photoURL}
            />
            ))}
            </FlipMove>

            
            
        </div>
        
      </>  
    )
}

export default Feed
