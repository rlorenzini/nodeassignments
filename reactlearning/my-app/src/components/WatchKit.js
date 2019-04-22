import React, { Component } from 'react';
import './WatchKit.css'

export class WatchKit extends Component {
  render() {
    return (
      <div className="watchKit">
      <h3>Hello WatchKit</h3>
      <p id="mainText">This is just a bunch of crazy text for you to read.</p>
      <div id="likeBar"><p>15 Comments &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 45 Likes</p></div>
      </div>
    )
  }
}
