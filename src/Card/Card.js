import React from "react";
import "./Card.css";
import {BsCart3} from 'react-icons/bs'

const Card = ({gunData, handleAddtoCart}) => {
  const {name,img, bullet, capacity, action, price, id}= gunData;
  // console.log(gunData);


  return (
    <div className='card'>
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="gun-info">
      <h1>{name}</h1>
      <p>Bullet Type: {bullet}</p>
      <p>Capacity: {capacity}</p>
      <p>Action: {action}</p>
      </div>
      <div className="add-to-cart">
      <button onClick={()=>handleAddtoCart(gunData)}><BsCart3 className="icon"/></button>
      <h1>$ {price}</h1>
      </div>
    </div>
  );
};

export default Card;
