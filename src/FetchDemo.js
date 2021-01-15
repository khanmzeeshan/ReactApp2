import React from 'react';
import axios from 'axios';

class FetchDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {posts: []};
    }
    fetchData(){
        const url = 'http://www.reddit.com/r/${this.props.subreddit}.json';
        axios.get(url)
        .then(res => {
            const posts = res.data.data.children.map(obj => obj.data); //array of data objects
            this.setState({ posts }); //when state is updated, render and UI are recalled/re-rendered
    });
    }
    //before render, populate data with did mount
    componentDidMount(){
        this.fetchData();
    }

    render(){
        return(
            <div>
            <h1>r/{this.props.subreddit}</h1>
            <u1> 
                {this.state.posts.map(post =>
                    <li key = {post.id}>
                        <a href = {post.url}>
                            {post.title}
                            </a>
                            </li>) }
            </u1>
            </div>
        )
    }
}

export default FetchDemo;