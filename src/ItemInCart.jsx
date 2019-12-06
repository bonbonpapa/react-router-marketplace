import React, { Component } from 'react'; 
import './App.css'; 
import {shoppingList} from './App.jsx';
class ItemInCart extends Component { 
  
OnDeleteItemfromClick = event => {
  // let newshoppingList = shoppingList.filter(x=> {return !(x===this.props.itemId)});
  // shoppingList = newshoppingList;
  shoppingList = [];
}
  render() { 
    return (
      <div> 
        <li>{"Description: " + this.props.itemId}</li>
        <button type='button' onClick={this.OnDeleteItemfromClick}>Delete</button>
      </div>
    ) 
  } 
} 
export default ItemInCart;