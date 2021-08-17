import React from 'react'
import "./Sidebar.css"
import SideBarOption from "./SideBarOption"
import TwitterIcon from "@material-ui/icons/Twitter"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Button } from "@material-ui/core";
import { Link, Redirect, useHistory } from 'react-router-dom'
import { logout } from './auth.action'
import { useDispatch, useSelector } from 'react-redux'
import {auth,provider} from "./firebase";
import {browserHistory} from 'react-router';
import { useEffect,useState } from 'react'
import Switch from "react-switch";
import { LOG_OUT } from './actionType'
import Toggle from 'react-toggle'
import {ThemeProvider} from "styled-components"
const SideBar = () => {
    const history=useHistory();
    const dispatch = useDispatch();
    const[checked,setChecked]=useState(false);
    const accessToken=useSelector(state=>state.auth.accessToken);
    const user=useSelector(state=>state.auth.user);
    console.log(user)
    const handleLog_out=()=>{
            if(user){
                dispatch({
                    type:LOG_OUT,
                })
                auth.signOut().then(()=>{
                        sessionStorage.removeItem("twitter-access-token");
                        sessionStorage.removeItem("twitter-access-profile");
                        history.push("/");
                       
                }).catch(()=>{
                        console.log("Error")
                })
            }
              
    }
   
    return (
        <div className="sidebar">
            {/*Twitter Icon */}
            <div className="sidebar--icon">
                 <TwitterIcon className="sidebar__twitterIcon"/>
                 <label>
                    <Toggle icons={{
                        checked:null,
                        unchecked: null,
                    }} ></Toggle>
                 </label>
                 
            </div>
            

            {/*Sidebar Options */}
            <Link style={{textDecoration:"none"}} to="/home"> 
               <SideBarOption active Icon={HomeIcon} text="Home"/>
            </Link>
            
            <SideBarOption Icon={SearchIcon} text="Explore" />
            <SideBarOption Icon={NotificationsNoneIcon} text="Notification"/>
            <SideBarOption Icon={MailOutlineIcon} text="Messages" />
            <SideBarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SideBarOption Icon={ListAltIcon} text="Lists" />
            <SideBarOption Icon={PermIdentityIcon} text="Profile" />

            <a onClick={handleLog_out} style={{textDecoration:"none"}}> 
              <SideBarOption active1 Icon={ExitToAppIcon} text="Logout" />
            </a>
            {/* Button -> Tweet */}
            <Button  variant="outlined" className="sidebar__tweet" fullWidth>
                Tweet
            </Button>
            <Button variant="outlined" className="sidebar__tweet_img" fullWidth>
                 <img src="https://img.icons8.com/color/48/000000/twitter--v2.png"/>
            </Button>
            
    </div>
    )
}

export default SideBar
