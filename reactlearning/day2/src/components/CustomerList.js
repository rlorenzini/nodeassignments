import React,{Component} from 'react';


export class CustomerList extends Component {
  removeStuff=(customer)=>{
    this.props.removeStuff(customer)
  }
  render() {
    let customers = this.props.customers
    let customerItems = customers.map((customer)=>{
      return (
        <li>{customer}<button onClick={() => this.removeStuff(customer)}>Remove</button></li>
      )
    })

    return (
      <ul>{customerItems}</ul>
    )
  }
}
