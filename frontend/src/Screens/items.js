import React from 'react';
import data from '../data';

const Items=({name,image,category,price,brand,rating,numReviews})=>{
        return(
            <>
            <div className="items-info">
            <div className="product-img">
                <img src={image} alt="image"/>
            </div>
            <div className="brand">
                <h2>{brand}</h2>
                <p>{name}</p>
            </div>
            <div className="add-minus-quantity">
                <i class="fas fa-minus minus"></i>
                <input type ="text" placeholder="2"/>
                <i className="fas fa-plus"></i>
            </div>
            <div className="price">
            <h1>{price}</h1>
            </div>
            <div className="remove-item">
                <i className="fas fa-trash-alt remove"></i>
            </div>
        </div>
        <hr />
        <div className="items-info">
            <div className="product-img">
                <img src={image} alt="image"/>
            </div>
            <div className="brand">
                <h2>{brand}</h2>
                <p>{name}</p>
            </div>
            <div className="add-minus-quantity">
                <i class="fas fa-minus minus"></i>
                <input type ="text" placeholder="2"/>
                <i className="fas fa-plus"></i>
            </div>
            <div className="price">
            <h1>{price}</h1>
            </div>
            <div className="remove-item">
                <i className="fas fa-trash-alt remove"></i>
            </div>
        </div>
        <hr />
        <div className="items-info">
            <div className="product-img">
                <img src={image} alt="image"/>
            </div>
            <div className="brand">
                <h2>{brand}</h2>
                <p>{name}</p>
            </div>
            <div className="add-minus-quantity">
                <i class="fas fa-minus minus"></i>
                <input type ="text" placeholder="2"/>
                <i className="fas fa-plus"></i>
            </div>
            <div className="price">
            <h1>{price}</h1>
            </div>
            <div className="remove-item">
                <i className="fas fa-trash-alt remove"></i>
            </div>
        </div>
        <hr />
        <div className="items-info">
            <div className="product-img">
                <img src={image} alt="image"/>
            </div>
            <div className="brand">
                <h2>{brand}</h2>
                <p>{name}</p>
            </div>
            <div className="add-minus-quantity">
                <i class="fas fa-minus minus"></i>
                <input type ="text" placeholder="2"/>
                <i className="fas fa-plus"></i>
            </div>
            <div className="price">
            <h1>{price}</h1>
            </div>
            <div className="remove-item">
                <i className="fas fa-trash-alt remove"></i>
            </div>
        </div>
        <hr />
        </>
        ) 
}
export default Items;