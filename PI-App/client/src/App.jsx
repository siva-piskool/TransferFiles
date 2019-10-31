import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Header} from './common/Header.jsx';
import {Home} from './components/Home.jsx';
import {About} from './components/About.jsx';
import {Works} from './components/Works.jsx';
import {SoftIdeas} from './components/SoftIdeas.jsx';
import {Contact} from './components/Contact.jsx';
import {PageNotFound} from './components/PageNotFound.jsx';

export const App = () =>{
    return(
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/works" component={Works} />
                <Route path="/softideas" component={SoftIdeas} />
                <Route path="/contact" component={Contact} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    );
}