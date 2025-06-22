import React from "react";
import "./Item.css"

function Item({handleChange, item, deleteItem}){
  
    return(
        <div className="item-container">
            <input
            type="text"
            placeholder="description"
            onChange={(e) => handleChange(item.id, 'description', e.target.value)}
            value={item.description}
            />
            <input
            type="number"
            placeholder="quantity"
            onChange={(e) => handleChange(item.id, 'quantity', Number(e.target.value))}
            value={item.quantity}
            />
            <input
            type="number"
            placeholder="price"
            onChange={(e) => handleChange(item.id, 'price', Number(e.target.value))}
            value={item.price}
            />
            <p>₹{(item.quantity * item.price).toFixed(2)}</p>
            <span><button onClick={() => deleteItem(item.id)}>X</button></span>
        </div>
    )
}

export default Item;