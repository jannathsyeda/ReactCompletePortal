import './App.css';
import Home from './components/Home/Home/Home';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Appointment from './components/Appointment/Appointment/Appointment';
import { createContext } from 'react';
import Login from './components/Login/Login/Login';
export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    
        <Router>
          <Switch>
            <Route exact path='/'>
<Home/>
            </Route>

            <Route path="/appointment">
<Appointment></Appointment>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          </Switch>
        </Router>
        </UserContext.Provider>

  );
}

export default App;
