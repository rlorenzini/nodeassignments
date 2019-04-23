import React, {Component} from 'react';
import './Article.css'

export class Article extends Component {
  render() {
    return (
      <div>
      <b>{this.props.title}</b>
      <p>{this.props.body}</p>
      <div className="article-stats">
      <i>Comments: {this.props.noOfComments}</i>
      <i>Likes: {this.props.noOfLikes}</i>
      </div>
      </div>
    )
  }
}
