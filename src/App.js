import './App.css';
import Home from './components/Home/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Appointment from './components/Appointment/Appointment/Appointment';

function App() {
  return (
   
    
        <Router>
          <Switch>
            <Route exact path='/'>
<Home/>
            </Route>

            <Route path="/appointment">
<Appointment></Appointment>
          </Route>

          </Switch>
        </Router>
    
  );
}

export default App;
