import './App.css'; 
import React, { Component } from 'react'; 
import { Route, BrowserRouter, Link } from 'react-router-dom' 
import Seller from './Seller.jsx' 
import Item from './Item.jsx' 
import ItemDetails from './ItemDetails.jsx' 
import ReviewerDetails from './ReviewerDetails.jsx' 
import { initialItems, initialSellers, reviews } from './Data.js' 
let renderAllItems = () => {  
  return <div> 
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

let renderDetails = rd => {
  let itemId = rd.match.params.itemId
  let itemCandiates = 
    initialItems.filter(item => { return item.id === itemId })
  return (<ItemDetails item={itemCandiates[0]} />);
}

let renderReviewer = rd => {
  let reviewer = rd.match.params.itemId

  return (<ReviewerDetails reviewer={reviewer}/>);
}

class App extends Component { 
  render() { 
    return ( 
      <BrowserRouter> 
        <div> 
          <Route exact={true} path='/' render={renderAllItems} /> 
          <Route exact={true} path='/sellers' render={renderAllSellers} /> 
          <Route exact={true} path='/seller/:sid' render={renderSeller} /> 
          <Route exact={true} path='/details/:itemId' render={renderDetails} /> 
          <Route exact={true} path='/reviewer/:itemId' render={renderReviewer} />       
          
        </div> 
      </BrowserRouter> 
    ); 
  } 
} 
export default App; 