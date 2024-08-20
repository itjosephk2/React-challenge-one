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
            posts: []
        }
    }
    
    componentDidMount() {
        console.log('Mounting');
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 2000)
    }

    handleChange = (event) => {
        const name = event.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name);
        })

        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        console.log('Rendering');
        return (
            <div className={css.Content}>
                
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor="searchInput">Search: </label>
                        <input 
                            onChange={(event) => this.handleChange(event)}
                            id="searchInput"
                            type='search'
                            placeHolder='By Author'
                        />
                        <h4>posts found: {this.state.posts.length}</h4>
                    </form>
                    
                </div>

                <div className={css.SearchResults}>
                    {
                        !this.state.isLoaded ? <Loader /> : <PostItem savedPosts={this.state.posts} />
                    }
                </div>
            </div>
        )
    }
}

export default Content