import React,{Component} from 'react';

export class CustomerList extends Component {
  render() {
    let customers = this.props.customers
    let customerItems = customers.map((customer)=>{
      return (
        <li>{customer}</li>
      )
    })
    return (
      <ul>{customerItems}</ul>
    )
  }
}
