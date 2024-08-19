import React, { Component } from 'react'
import css from "./css/NavBarSimple.module.css"

export class NavBarSimple extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Hello, guest!",
            logButton: "log in",
        }
    }

    logIn() {
        this.setState((prevState, prevProps) => {
            return {
                name: prevState.name === "Hello, guest!" ? "Welcome back user" : "Hello, guest!",
                logButton: prevState.logButton === "log in" ? "log out" : "log in",
            }
        });
    }

    render() {
        return (
            <div className={css.NavBar}>
            <h1>My Gallery</h1>
            <span>{this.state.name}</span>
            <button onClick={() => this.logIn()}>{this.state.logButton}</button>
            </div>
        )
    }

}

export default NavBarSimple