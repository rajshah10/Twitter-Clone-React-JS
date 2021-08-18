import React from 'react'
import "./search.css"
import SearchInfo from './SearchInfo'
import Widget from './Widget'
import {
    Timeline,
    TwitterShareButton,
    Tweet,
  } from "react-twitter-widgets";
const Search = () => {
    return (
        <div className="search">
            <div className="ss">
                <SearchInfo/>
            </div>
            <div className="widget">
                 <Widget/>
                 
            </div>
            <div style={{marginTop:"74px",marginLeft:"-55px"}} className="">
                <div className="widgets__widgetContainer">
                    <h2>What's happening</h2>

                    <Tweet  tweetId={"1427986451283677187"} />
                    <Tweet  tweetId={"1428001216211128333"} />
                    <Tweet  tweetId={"1427582482975711237"} />
                
                    

                    

                    
                </div>
                 
            </div>
             
                
                
                
               
        </div>

    )
}

export default Search
