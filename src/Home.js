import React, { Component } from "react";
import logo from './logo.svg';
import "./Home.css";
import "./App.css";
import "./index.css";
class Home extends Component {
    render() {
        return (
            <div>
                <h2>Hello!</h2>
                <p>My name is Joe Aronson and I use the site for various things.  I'll occasionally update content here when I find the time.</p>
                <img src={logo} className="App-logo" alt="logo" />

            </div>

        );
    }
}

export default Home;