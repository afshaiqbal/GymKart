import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars-2';
import Items from './items';
import { useState } from 'react';
import data from '../data';

const Cart=()=>{
    const [item,setItem]=useState(data);
    return(
        <>
        <header>
            <div className="continue-shopping">
                <img src="https://cdn4.iconfinder.com/data/icons/defaulticon/icons/png/256x256/arrow-alt-left.png" alt="arrow" className="arrow-icon"/>
                <h3>Continue Shopping</h3>
            </div>
            <div className="cart-icon" >
                <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-01-512.png" alt="cart" className="cart"/>
                <p>7</p>
            </div>
        </header>
        <section className="main-cart-section">
                <h1>shopping cart</h1>
                <p className="total-items">you have <span className="total-items-count">7 </span>items in shopping Cart</p>
                <div className="cart-items">
                    <div className="cart-items-container">
                    <Scrollbars>
              {/* {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })} */}
            </Scrollbars>
                    </div>

                </div>
                <div className="card-total">
                    <h3>Cart Total:<span>350$</span></h3>
                    <button>Checkout</button>
                </div>
        </section>
        </>

    )
}
export default Cart;