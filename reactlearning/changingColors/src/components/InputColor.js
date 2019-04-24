import React,{Component} from 'react';

export class InputColor extends Component {
  constructor(){
    super()
    this.state={
      color:''
    }
  }
  handleInputColorTextChange=(e)=>{
    this.setState({
      color:e.target.value
    })
  }
  handleApplyButtonClick=()=>{
    this.props.colorChangedCallback(this.state.color)
    // console.log(this.state.color)
  }
  render(){
    return(<div>
      <input onChange={this.handleInputColorTextChange} placeholder="Try #00008B" type="text"/>
      <button onClick={this.handleApplyButtonClick}>Apply</button>
      </div>
    )
  }
}
