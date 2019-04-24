import React, {Component} from 'react';

export class DisplayColor extends Component {
  render(){
    return(
      <div style={{backgroundColor:this.props.color}}>{this.props.color}</div>
    )
  }
}
