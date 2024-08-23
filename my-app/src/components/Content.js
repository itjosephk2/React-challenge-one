import React, { Component } from "react";
import css from "./css/Content.module.css";
// import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";
import axios from "axios";
import API_KEY from "../secrets";


export class Content extends Component {
    constructor(props) {    
        super(props)
        this.state = {
            isLoaded: false,
            posts: []
        }
    }
    
    componentDidMount() {
        this.fetchImages()
    }

    async fetchImages() {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const fetchedPosts = response.data.hits
        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts
        })
    }

    handleChange = (event) => {
        const name = event.target.value.toLowerCase();
        const filteredPosts = this.state.savedPosts.filter((post) => {
            return post.user.toLowerCase().includes(name);
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
                        !this.state.isLoaded 
                        ? <Loader /> 
                        : <PostItem savedPosts={this.state.posts} />
                    }
                </div>
            </div>
        )
    }
}

export default Content