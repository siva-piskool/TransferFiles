import * as React from 'react';
import { Link } from 'react-router-dom';
export const Header = () => {
    return (
        <div className="piheader">
            <div>&nbsp;</div>
            <div className="pilogo piMT10">
                <Link to="/">
                    <img src={require("../../public/images/pi-logo.svg")} alt="P! Logo" />
                </Link>
            </div>
            <div className="pilogo-text-tagline">
                <p className="pilogo-text">Print Ideas</p>
                <p className="pilogo-tagline">Presenting Imaginations</p>
            </div>
            <div className="pinav">
                <nav>
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <Link to="/about"><li>About</li></Link>
                            <Link to="/works"><li>Works</li></Link>
                            <Link to="/softideas"><li>Soft Ideas</li></Link>
                            <Link to="/contact"><li>Contact</li></Link>
                        </ul>
                    </div>
                    <ul className="hide">
                        <li><Link to="/about"><span>About</span></Link></li>
                        <li><Link to="/works"><span>Works</span></Link></li>
                        <li><Link to="/softideas"><span>Soft Ideas</span></Link></li>
                        <li><Link to="/contact"><span>Contact</span></Link></li>
                    </ul>
                </nav>
            </div>
            <div>&nbsp;</div>
        </div>
    );
}