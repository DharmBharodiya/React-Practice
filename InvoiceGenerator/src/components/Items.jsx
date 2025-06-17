import React from 'react';
import './Items.css';

const Items = ({ items, setItems }) => {
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = field === 'quantity' || field === 'rate'
      ? parseFloat(value) || 0
      : value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { description: '', quantity: 1, rate: 0 }]);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="section items-section">
      <h2>Invoice Items</h2>
      <table className="items-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Amount</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td>
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => handleItemChange(idx, 'description', e.target.value)}
                  placeholder="Service or Item"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(idx, 'quantity', e.target.value)}
                  min="1"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.rate}
                  onChange={(e) => handleItemChange(idx, 'rate', e.target.value)}
                  step="0.01"
                />
              </td>
              <td>
                ₹ {(item.quantity * item.rate).toFixed(2)}
              </td>
              <td>
                <button onClick={() => removeItem(idx)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-item-btn" onClick={addItem}>➕ Add Item</button>
    </div>
  );
};

export default Items;
