import React from 'react'
import "./Widget.css"
import {
    Timeline,
    TwitterShareButton,
    Tweet,
  } from "react-twitter-widgets";
  import SearchIcon from "@material-ui/icons/Search";
const Widget = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <Tweet tweetId={"1427495402794889221"} />
                <Tweet tweetId={"1427241877934419970"} />
               
                

                

                
            </div>
        </div>
    )
}

export default Widget
