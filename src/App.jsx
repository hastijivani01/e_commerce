import { useState } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Men from './Component/Men';
import Women from './Component/Women'; 
import Kids from './Component/Kids';
import Home_Living from './Component/Home_Living'; 
import Footer from './Component/Footer';
// import Footer from './Component/Footer';    


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Switch>
        
          <Route  path='/men'>
              <Men />
          </Route>
          <Route  path='/women'>
              <Women />
          </Route>
          <Route  path='/kids'>
          <Kids />
          </Route> 
          <Route  path='/homeliving'>
              <Home_Living />
          </Route>
          <Route exact path='/'>
        <Navbar />
          </Route> 
        </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;

