import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom'
import { login } from './auth.action';
import { auth, provider } from './firebase';
import "./loginSignup.css";
// Authentication function to handle authentication with google
const LoginSignup = () => {
    //dispatch is used to dispatch the actions to the store
    const dispatch=useDispatch();
    //its used when u want data from store from any component
    const accessToken=useSelector(state=>state.auth.accessToken);
    const history=useHistory();
    const handleAuth=()=>{
        //Action creater function
        dispatch(login());
    }
    useEffect(() => {
        if(accessToken)
        {
            history.push('/home');
        }
    }, [accessToken,history])//any time access token is modified it will again execute with new values
    return (
        // CONTAINER
        <div className="container">
            <div className="image">
                  <svg viewBox="0 0 24 24" aria-hidden="true" class="big-bird"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
    
            </div>
            <div className="content">
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="small-bird">
                        <g>
                         <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                        </path>
                        </g>
                    </svg>
                    <h1>Happening Now</h1>
                    <h3>Join Twitter today.</h3>

                    <div className="button">
                        <button onClick={handleAuth} className="btn btn-signup">Sign Up with Google</button>
                        <bitton  className="btn btn-login">Sign Up with phone or email</bitton>
                    </div>

            </div>
            
            <div className="footer">
                <nav>
                    <a href="#">About</a>
                    <a href="#">Help Center</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Policy</a>
                    <a href="#">Ads Info</a>
                    <a href="#">Blog</a>
                    <a href="#">Status</a>
                    <a href="#">Carrers</a>
                    <a href="#">Brand Resources</a>
                    <a href="#">Advertising</a>
                    <a href="#">Marketing</a>
                    <a href="#">Twitter for Busines</a>
                    <a href="#">Developers</a>
                    <a href="#">Directory</a>
                    <a href="#">Settings</a>
                    <div>&copy; 2021 Twitter</div>

                </nav>
            </div>
        </div>
    )
}

export default LoginSignup
