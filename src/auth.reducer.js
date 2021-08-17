import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "./actionType"

const initialState={
    // If the data is stored on your browser then it retrieve the data 
    accessToken:sessionStorage.getItem("twitter-access-token")?sessionStorage.getItem("twitter-access-token"):null,
    user:sessionStorage.getItem("twitter-profile")?JSON.parse(sessionStorage.getItem("twitter-profile")):null,
    loading:false
}
//Auth reducer for Google authentication
export const authReducer=(prevState=initialState,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...prevState,
                accessToken:action.payload,
                loading:false,
            }
        case LOGIN_REQUEST:
            return{
                ...prevState,
                loading:true,
            } 
        case LOGIN_FAIL:
            return{
                ...prevState,
                accessToken:null,
                loading:false,
                error:action.payload,
            } 
        case LOAD_PROFILE:
            return{
                ...prevState,
                user:action.payload,
            }
        case LOG_OUT:
            return{
                ...prevState,
                accessToken:null,
                user:null,
            }         
          default:
              return prevState      
    }

}

