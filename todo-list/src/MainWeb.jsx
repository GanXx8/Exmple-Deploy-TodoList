// import Main from './Main.jsx'
import MainPage from './Pages/MainPage.jsx';
import LandingPage from './Pages/LandingPage.jsx';
import Navbar from "./Pages/navbar.jsx"
import About from './Pages/About.jsx'
import {
    BrowserRouter as Router,
    Switch,
    Route 
  } from "react-router-dom";

function MainWeb() {
    return (
      <>
       <Router> 
            <Navbar/>
             {/* <Main /> */}
                <Switch>
                    <Route path="/home" exact component={LandingPage}/>
                    <Route path="/todo/list" exact component={MainPage}/>
                    <Route path="/about/me" exact component={About}/> 
                </Switch>
     </Router>
       
      </>
    );
  }
  
  export default MainWeb;