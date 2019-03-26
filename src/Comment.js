// add Comment component here
import React, { Component } from 'react';
import BlogPost from "src/BlogPost.js";

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        {this.props.commentText}
      </div>
    )
  }
}
