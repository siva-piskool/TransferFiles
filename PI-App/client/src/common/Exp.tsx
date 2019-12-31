import * as React from 'react';
import {HashRouter,Link} from "react-router-dom";
import './Exp.css';
const Exp:React.FC=()=>{
    return(<HashRouter>
         <div className="piheader">
        <div>&nbsp;</div>
        <div className="pilogo piMT10">
        <Link to=""> <img src={require('../../public/images/pi-logo.svg')} alt=""/> </Link>
        </div>
        <div className="pilogo-text-tagline">
            <p className="pilogo-text">Print Ideas</p>
            <p className="pilogo-tagline">Presenting Imaginations</p>
        </div>
        <div className="pinav">
        <nav>
            <div className="menu-toggle">
           <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
            <ul className="menu">
              <Link to="/about"><li>About</li> </Link> 
              <Link to="/works"><li>Works</li> </Link> 
              <Link to="/softideas"><li>SoftIdeas</li> </Link> 
              <Link to="/contacts"><li>Contacts</li> </Link> 
            </ul>
            </div>
            <ul className="hide">
              <Link to="/about"><li>About</li> </Link> 
              <Link to="/works"><li>Works</li> </Link> 
              <Link to="/softideas"><li>SoftIdeas</li> </Link> 
              <Link to="/contacts"><li>Contacts</li> </Link> 
            </ul>
        </nav>
        </div>
        <div>&nbsp;</div>
    </div>
    </HashRouter>
   )
}
export default Exp;