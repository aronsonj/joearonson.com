import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter, Routes
} from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Contact from "./Contact";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Joe Aronson's Homepage</h1>
                    <ul className="header">
                        <li><NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>Home</NavLink></li>
                        <li><NavLink to="/resume" className={({ isActive }) => (isActive ? "link-active" : "link")}>Resume</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "link-active" : "link")}>Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/resume" element={<Resume/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;