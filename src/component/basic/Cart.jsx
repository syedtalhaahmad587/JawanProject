import React from 'react';
import Menu from './menuApi.js';
import MenuCart from './MenuCart.js';



function Cart(props) {
    return (
      <>
        <div className="cards">
        <div className="card">
        <img className="card__img "  src={props.imgsrc} alt="lorempicsal" />
        <div className="card__info">
            <span className="card__category" >{props.title}</span>
            <h3 className="card__title">{props.pera}</h3>
            <a href={props.link} target="_blank" >
                <button>{props.button}</button>
            </a>
        </div>
        </div>
        </div>
      </>
    );
  }

export default Cart
