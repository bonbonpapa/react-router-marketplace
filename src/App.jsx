import './App.css'; 
import React, { Component } from 'react'; 
import { Route, BrowserRouter, Link } from 'react-router-dom' 
import Seller from './Seller.jsx' 
import Item from './Item.jsx' 
import ItemDetails from './ItemDetails.jsx' 
import ItemInCart from './ItemInCart.jsx'
import ReviewerDetails from './ReviewerDetails.jsx' 
import ShoppingList from './ShoppingList.jsx'
import { initialItems, initialSellers, reviews } from './Data.js' 

let renderAllItems = () => {  
  return <div> 
    <div className="card center ">
          <Link to={"/shoppingcart"}> Link to shopping cart </Link>
    </div>
    {initialItems.map(item => 
      (<Item 
        cost={item.price} 
        sellerId={item.sellerId} 
        imageLocation={item.image} 
        description={item.description}  
        itemId={item.id}
      />))} 
      <div className="card center ">
          <Link to={"/sellers" }> Link to all sellers </Link> 
      </div>
  </div> 
} 
let renderAllSellers = () => {  
  return (
    <div className="card center ">
      <h3>All Sellers :</h3>
      <ul>
        {initialSellers.map(seeler => {
          return (
            <li>
              <Link to={"/seller/" + seeler.id}> Seller: {seeler.name} </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
} 



let renderSeller = routerData => { 
  let sellerId = routerData.match.params.sid 
  let candidates = 
    initialSellers.filter(seller => { return seller.id === sellerId }) 
  return (<Seller seller={candidates[0]} />) 
}  

let renderItemDetails = (rd, addtoShoppingList) => {
  let itemId = rd.match.params.itemId
  let itemCandiates = 
    initialItems.filter(item => { return item.id === itemId })
  return (<ItemDetails item={itemCandiates[0]} addToShoppingList ={addtoShoppingList} />);
}

let renderReviewer = rd => {
  let reviewer = rd.match.params.itemId

  return (<ReviewerDetails reviewer={reviewer}/>);
}

class App extends Component { 
constructor(props) {
  super(props);
  this.state = {
    shoppingList : []
  }
 
}

addtoShoppingList = item => {
  this.setState(
    {
      shoppingList: this.state.shoppingList.concat(item)
    }
  );
}



renderShoppingcart = () => {
  
  return (
    <div className = "card center ">
      <h3>Shopping cart :</h3>
      <ul>
      {
          // this.state.shoppingList.map(id => {
          //   return (
          //     <div>
          //       <ItemInCart itemId={id}/>                  
          //     </div>             
          //   )
          // })          
        }
      </ul>  
      <button type="button" onClick={this.onPurchase}>Purchase the items in the cart</button>
    </div>
  )
}
renderItemDetails = rd => renderItemDetails(rd, this.addtoShoppingList);
onPurchase = event => {
    
}
OnDeleteItemfromCart = event =>{

}
  render() { 
    return ( 
      <BrowserRouter> 
        <div> 
          <Route exact={true} path='/' render={renderAllItems} /> 
          <Route exact={true} path='/sellers' render={renderAllSellers} /> 
          <Route exact={true} path='/shoppingcart' render={this.renderShoppingcart} /> 
          <Route exact={true} path='/seller/:sid' render={renderSeller} /> 
          <Route exact={true} path='/details/:itemId' render={this.renderItemDetails} /> 
          <Route exact={true} path='/reviewer/:itemId' render={renderReviewer} />     
          
        </div> 
      </BrowserRouter> 
    ); 
  } 
} 
export default App; 

