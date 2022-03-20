import React, { Component } from "react";
import LogicHook from "./LogicHook";
import "./index.css";
import { TextField, Button } from '@material-ui/core';
import LinkShortener from "./LinkShortener";

class Test extends Component {
    constructor(props){
        super(props);

        this.state = {value: '', visible: false, result: ''};

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    handleChange(event) {
        this.setState({value: event.target.value, visible: false});

    }

    onSubmit(event){
        //alert('Form submitted:' + this.state.value);
        //this.setState({visible: !this.state.visible});
        this.setState((state) => {
            // Important: read `state` instead of `this.state` when updating.

            return {value: LinkShortener(this.state.value) , visible: true}
        });
        //this.setState({result: 'some garbage + ' + this.state.value});
        console.log("Your input was: " + this.state.value)
    }

    render() {
        return (
            <div>
                <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
                    <TextField
                        onChange={this.handleChange}
                        id="outlined-name"
                        label="Link to shorten"
                        margin="normal"
                        variant="outlined"
                        style={{minWidth:'100px'}}
                        type="text"
                    /><br></br>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >Shorten Me!</Button>

                </form>
                {this.state.visible && <p>{this.state.value}</p>}
            </div>
        );
    }
}

export default Test;
