import React, { Component } from "react";
import Footer from "./Footer";
import axios from "axios";

class PostIdComments extends Component {
  state = { posts: [], id: 2 };

  async componentDidMount() {
    const { data: posts } = await axios.get(
      `http://localhost:3001/postsId?id=${this.state.id}`
    );
    this.setState({ posts });
  }

  render() {
    return (
      <React.Fragment>
        <table style={{ border: "1px solid black", backgroundColor:"#CAF7E3" }}>
          <thead>
            <tr>
              <th>PostId</th>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.postId}</td>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.email}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default PostIdComments;
