import React, { forwardRef, useState } from "react";
import "./Posts.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar},ref) => {
        
    return (
        <>
       <div className="post" ref={ref}>
            <div className="post-avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="tweet-description">
                    <div className="username">
                        {displayName}{" "} <VerifiedUserIcon className="post__badge"/> 
                       <span style={{color:"gray",fontWeight:"lighter"}}> @{username}</span>
                       <span  style={{float:"right",color:"silver",position:"relative"}}><MoreVertIcon/></span>
                        
                    </div>
                    <div className="text">
                            {text}
                    </div>
                    <div className="tweet-image">
                        <img src={image}/>
                    </div>
                    <div className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                    </div>
            
            </div>


            {/**2n dpost */}

            
       </div>
       

        </>

   

    
    )
}
    )

export default Post
