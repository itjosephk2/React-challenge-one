import React, { Component } from "react";
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
    constructor(props) {
        console.log('Constructing')      
        super(props)
        this.state = {
            isLoaded: false,
        }
    }
    
    componentDidMount() {
        console.log('Mounting');
        setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 2000)
    }

    render() {
        console.log('Rendering');
        return (
            <div className={css.Content}>
                
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>

                <div className={css.SearchResults}>
                    {
                        !this.state.isLoaded ? <Loader /> : <PostItem savedPosts={savedPosts} />
                    }
                </div>
            </div>
        )
    }
}

export default Content