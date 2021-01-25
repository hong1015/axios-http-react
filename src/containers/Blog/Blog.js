import React, { Component } from "react";
import axios from "../../axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedId: null,
    err: false
  };
  componentDidMount() {
    axios.get("/posts").then((response) => {
      const posts = response.data.slice(0, 4);
      const updatePosts = posts.map((post) => {
        return {
          ...post,
          author: "Me",
        };
      });
      this.setState({
        posts: updatePosts,
      });
    }).catch(error => {
        this.setState({err: true});
    });
  }


  postSelectedHandler = (id) => {
    this.setState({
        selectedId: id
    });
  }

  render() {
      let posts = <p>Oh no ?.... </p>;
      if(!this.state.err){
        posts = this.state.posts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}
            />
        ));
        }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
