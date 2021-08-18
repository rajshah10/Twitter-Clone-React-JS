import React ,{useState} from 'react'
import "./Widget.css"
import {
    Timeline,
    TwitterShareButton,
    Tweet,
  } from "react-twitter-widgets";
  import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from 'react-router-dom';
const Widget = () => {
    const history = useHistory();
    const [search,setSearch]=useState('');
    const handleClick=()=>{
        
         history.push(`/search/${search}/`)   
         setSearch("")
    }
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <form onSubmit={handleClick}>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Twitter" type="text" />
                </form>
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
