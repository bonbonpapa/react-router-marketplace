import React, { Component } from 'react'; 
import { Link } from 'react-router-dom' 
import './App.css'; 
import {reviews} from './Data.js' 
class ItemDetails extends Component {  
  render() { 

    let reviewsforitem = reviews.filter(review => {
      return review.itemId === this.props.item.id
    } )
    
    let reviewdetails = "";

    // if(reviewsforitem.length === 0)
    // {
    //   reviewdetails = <div>No reviews for this item.</div>
    // } 
    // else
    // {
    //   reviewdetails = reviewsforitem.map(review => {
    //   return (
    //             <div>{review.contents}</div>
    //         )
    // })
    // }

    reviewdetails = reviewsforitem.length===0 ? <div>No reviews for this item.</div> : reviewsforitem.map(review => {
      return (
              <div>
                <div>{review.contents}</div>
                <Link to={"/reviewer/" + review.reviewer}> From {review.reviewer} </Link> 
              </div>
            )
    });
       

    return (<div className="card center "> 
      <img height="100px" src={this.props.item.image} /> 
      <div> 
        <div>{"Inventory: " + this.props.item.inventory}</div>
        <h3>Reviews for this item</h3>  
        {reviewdetails}             
      </div>
    </div>) 
  } 
} 
export default ItemDetails; 