import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Header";
import About from "./components/AboutMe";
import Portfolio from "./components/Footer";
import Contact from "./components/Contact";
import Footer from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

const main = () => {
    return (
        <Router>
        <div>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/AboutMe" component={About} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Footer" component={Footer} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Projects" component={Projects} />
            </Switch>
            <Footer />
        </div>
    </Router>
    );
}

export default main;
