import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './auth.action';
import Feed from './Feed';
import "./HomeScreen.css"
import Widget from "./Widget"
import SideBar from './SideBar';
const HomeScreen = () => {
    return (
        <div className="homescreen">
           <SideBar/>
           <Feed/>
           <Widget tweetId={"858551177860055040"}/>
           
        </div>
    )
}

export default HomeScreen
