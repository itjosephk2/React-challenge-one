import React, { Component } from 'react'
import NavBarChild from './navBarChild';
import css from "./css/NavBarForm.module.css"

export class NavBarForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
        }
    }

    handleButtonClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn ? false: true
        }))
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <NavBarChild
                    isLoggedIn={this.state.isLoggedIn}
                    handleClick={this.handleButtonClick}
                />
            </div>
        )
    }

}

export default NavBarForm