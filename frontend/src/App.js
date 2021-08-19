import React from 'react';
import './App.css';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import Homescreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import SignIn from './Screens/signin';
import Cart from './Screens/cart';

function App() {
//   const openMenu=()=>{
//     document.querySelector(".sidebar").classList.add("open");
//   }
//   const closeMenu=()=>{
//     document.querySelector(".sidebar").classList.remove("open");
//   }
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  return (
     <BrowserRouter>
     <div className="grid-container">
  <header className="header">
         <div className="brand">
            <button onClick={openNav}>
                 &#9776;
             </button>
             <Link to ="/">GymKart</Link>
         </div>
         <div className="header-links">
             <Link to="/cart">Cart </Link>
             <Link to ="/signin"> Sign in</Link>
         </div>
     </header>
    <aside className="sidebar" id="mySidenav">
          <h3> Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeNav}>x</button>         <ul>
            <li>
                <a href="index.html">Tracks</a>
           </li>
           <li>
                <a href="index.html">Shoes</a>
           </li>
       </ul>
   </aside>
    <main className="main" id="main">
         <div className="content">
                <Route exact path="/cart" component= {Cart}/>
            <Route exact path="/signin" component={SignIn}/>
           <Route path="/product/:id" component={ProductScreen}/>
          <Route path="/" exact={true} component={Homescreen}/>
            
        </div>
   

     </main>
    <footer className="footer">
        All rights reserved.
     </footer>
 </div>
 </BrowserRouter>


  );
}

export default App;
