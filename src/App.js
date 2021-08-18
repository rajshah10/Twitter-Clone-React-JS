import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginSignup from './LoginSignup';
import HomeScreen from "./HomeScreen"
import {ThemeProvider} from "styled-components"
import { useState } from 'react';
import SideBar from './SideBar';
import Widget from './Widget';
import Feed from './Feed';
import Search from './Search';

function App() {
  const [darkMode,setDarkMode]=useState(true);
  return (
   
        <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
                <LoginSignup />   
            </Route>
            <Route path='/home'>
                <HomeScreen />
            </Route> 
            <Route path="/search/:search">
            <div className="SearchPage">
                <SideBar/>
                <Search/>
            </div>   
            </Route> 
            <Route redirect to="/">
            </Route>
            
            
          </Switch>
      </Router> 
      </div>
   
    
  );
}

export default App;
