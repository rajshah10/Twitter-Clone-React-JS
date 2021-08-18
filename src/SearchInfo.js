import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import "./SearchInfo.css" 
import db from "./firebase"
import Post from './Post'
import Widget from './Widget'
import { Tweet } from 'react-twitter-widgets'
import Feed from "./Feed"
const SearchInfo = () => {
    let [news,setNews]=useState([]);
    const params=useParams()
    const newsall=params.search;
    useEffect(() => {
        db.collection('news').onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
                if(doc.data().type===`${newsall}`)
                {
                   news=[...news,{...doc.data()}]
                   setNews(news)
                   console.log(news)
                }
                else
                {
                   
                    
                    console.log("No such news Found")
                }
            })
        })
    }, [])
    return (
        <>
        {news.map(ne=>(
            <>
            <div className="searchInfo">
                <div className="news">
                    <p>World News</p>
                    <h1>{ne.title} </h1>
                </div>
                <div className="news-img">
                        <img src={ne.image}></img>
                </div>
                 
           </div>
           <div style={{display:"flex"}} className="post-tweet">
           <Post
              
           displayName={ne.displayName}
           username={ne.username}
           text={ne.text}
           image={ne.img}
           avatar={ne.ava}
           />
        
           </div>
                
                
                
            </>
            
            
        ))}
        
        </>
                
       
    )
}

export default SearchInfo
