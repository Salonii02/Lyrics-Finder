import './App.css';
import React from "react";
import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import {TrackProvider} from "./TrackContext";
import Lyrics from './components/tracks/Lyrics';
function App() {
  return (
   <TrackProvider>
    <div className="App">
     <Router>
     <React.Fragment>
       <Navbar/>
       <div className="container">
       <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/lyrics/track/:id" component={Lyrics}/>
        </Switch>
       </div>
     </React.Fragment>
       </Router>
    </div>
    </TrackProvider>
  );
}

export default App;
