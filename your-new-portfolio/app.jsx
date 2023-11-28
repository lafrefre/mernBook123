import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Header";
import About from "./components/AboutMe";
import Portfolio from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
    return (
        <Router>
        <div>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/AboutMe" component={About} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={Contact} />
            </Switch>
            <Footer />
        </div>
    </Router>
    );
}

export default App;