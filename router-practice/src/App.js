import React from "react";
import Nav from "./Nav";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactMe from "./Pages/ContactMe";
import Resume from "./Pages/Resume";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Nav/>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contactme" component={ContactMe}/>
                <Route path="/resume" component={Resume}/>
            </BrowserRouter>
        </div>
    )
}

export default App;