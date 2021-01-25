import React, { Component } from 'react';
import axios from 'axios'
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.loadedPost|| (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ){
                let url = `/posts/${this.props.id}`;
                axios.get(url).then(response => {
                    this.setState({
                        loadedPost: response.data
                    })
                })
            }
          
        }
    }
    deletePostHandler = () => {
        let url = `/posts/${this.props.id}`;
        axios.delete(url).then(response => {
            console.log('?response ', response)
            // this.setState({
            //     loadedPost: response.data
            // })
        })
    }
    render () {
        let post = <p className="center">Please select a Post!</p>;
        if(this.props.id){
            post = <p className="center">Loading!</p>;
        }
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
     
        return post;
    }
}

export default FullPost;