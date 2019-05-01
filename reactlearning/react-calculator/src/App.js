import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';


class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { value, btns, addElem, clear, equal } = this.props;
    return (
      <div className="App">
        <div className="value-container">
          <input type="text" value={value} />
        </div>
        <div className="buttons-container">
          {btns.map((item, key) => {
            if(item == "C"){
              return(
                <button onClick={ clear.bind(this) } key={key}>{item}</button>
              )
            } else if(item == "="){
              return(
                <button onClick={ equal.bind(this, value) } key={key}>{item}</button>
              )
            } else {
              return(
                <button onClick={ addElem.bind(this, item) } key={key}>{item}</button>
              )
            }
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    value: state.value,
    btns: state.btns
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addElem: (text) => {
      dispatch({
        type: 'ADD_ELEM',
        text
      })
    },
    clear: () => {
      dispatch({
        type: 'CLEAR'
      })
    },
    equal: (value) => {
      dispatch({
        type: 'EQUAL',
        value
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
