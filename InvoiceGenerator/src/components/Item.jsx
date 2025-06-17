import React from "react";

function Item({ removeItem, item, setItem }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ [name]: value });
  };

  return (
    <div className='item'>
        <div className="form-group-inside">
            <label>Description</label>
            <input
                type="text"
                placeholder='e.g. Clothes'
                value={item.description}
                onChange={handleChange}
                name='description'
            />
        </div>
        <div className="form-group-inside">
            <label>Quantity</label>
            <input
                type="number"
                placeholder='e.g. 10'
                value={item.quantity}
                onChange={handleChange}
                name='quantity'
            />
        </div>
        <div className="form-group-inside">
            <label>Rate</label>
            <input
                type="number"
                placeholder='e.g. 45'
                value={item.rate}
                onChange={handleChange}
                name='rate'
            />
        </div>
        <div className="form-group-inside">
            <button onClick={removeItem}>X</button>
        </div>
    </div>
  );
}

export default Item;