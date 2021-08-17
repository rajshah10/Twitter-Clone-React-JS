import { Redirect, useHistory } from "react-router-dom";
import {LOGIN_SUCCESS,LOGIN_FAIL,LOGIN_REQUEST,LOAD_PROFILE,LOG_OUT} from "./actionType"
import {auth,provider} from "./firebase";
export const login=()=>async dispatch=>{

    try{
        dispatch({
            type:LOGIN_REQUEST,//actions Types 
        })
        const res=await auth.signInWithPopup(provider);
        const accessToken=res.credential.accessToken;
        const profile={
            name:res.additionalUserInfo.profile.name,
            photoURL:res.additionalUserInfo.profile.picture,
        }
        //Store your data on browser storage when login is success
        sessionStorage.setItem("twitter-access-token",accessToken);
        // Profile is object so u cant send data as object to server so u have to convert it into string 
        sessionStorage.setItem("twitter-profile",JSON.stringify(profile));

        dispatch({
            type:LOGIN_SUCCESS,
            payload:accessToken
        })
        dispatch({
            type:LOAD_PROFILE,
            payload:profile,
        })
    }catch(error){
        dispatch({
            type:LOGIN_FAIL,
            payload:error.meassage,
        })
    }
   
    
}

