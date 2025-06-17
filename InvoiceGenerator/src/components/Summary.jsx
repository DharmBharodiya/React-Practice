import React from "react";
import './Summary.css';

const Summary = ({items, tax, setTax, discount, setDiscount}) => {
    const subtotal = items.reduce(
        (sum, item) => sum + item.quantity * item.rate, 0
    )

    const total = subtotal + Number(tax || 0) - Number(discount || 0);

    return(
        <div className="section summary-section">
            <h2>Summary</h2>
            <div className="summary-row">
                <label>Subtotal:</label>
                <span>₹ {subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
                <label htmlFor="tax">Tax:</label>
                <input type="number"
                id="tax"
                value={tax}
                onChange={(e) => setTax(parseFloat(e.target.value) || 0)}
                placeholder="e.g. 50"
                />
            </div>
            <div className="summary-row">
                <label htmlFor="discount">TDiscount:</label>
                <input type="number"
                id="discount"
                value={discount}
                onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                placeholder="e.g. 50"
                />
            </div>
            <div className="summary-row">
               <label htmlFor="total">Total:</label>
               <span>₹ {total.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default Summary;