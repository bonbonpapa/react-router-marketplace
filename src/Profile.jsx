import React, { Component } from 'react'; 
import { Link } from 'react-router-dom' 
import './App.css'; 
class Profile extends Component {  
  
  render() { 
    return (<div className="card center "> 
    <ul>
     { this.props.historyList.map(item => 
      {return <li>{"Description: " + item.description}</li>})}
    </ul>    
    </div>) 
  } 
} 
export default Profile; 