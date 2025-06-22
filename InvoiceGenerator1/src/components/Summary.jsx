import React from 'react'
import "./Summary.css"

function Summary({tax, setTax, setDiscount, discount, items}) {
    console.log('Items received:', items);

    const handleChange = (e) => {
        const {value, name} = e.target;
        if(name === "tax"){
            setTax(parseFloat(value))
        }else{
            setDiscount(parseFloat(value))
        }
    }

    const subtotal = items.reduce(
        (sum, item) => {
            console.log('Current item:', item);
            console.log('Current sum:', sum);
            return sum + (item.quantity * item.price);
        }, 0
    )
    console.log('Calculated subtotal:', subtotal);

    const calculateTotal = () => {
        const total = subtotal + Number(tax || 0) - Number(discount || 0)
        console.log('Calculated total:', total);
        return total
    }


  return (
    <div className="section summary">
        <div className="calculation-side side">
            <div className="summary-row">
                <label>Subtotal:</label>
                <span>₹ {subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
                <label>Tax</label>
                <input
                type="number"
                onChange={(e) => handleChange(e)}
                name='tax'
                value={tax}
                placeholder='e.g. 45'
                />
            </div>
            <div className="summary-row">
                <label>Discount</label>
                <input
                type="number"
                onChange={(e) => handleChange(e)}
                value={discount}
                name='discount'
                placeholder='e.g. 100'
                />
            </div>
        </div>
        <div className="total-side side">
            <div className="inside-side">
                <label>Total</label>
                <h2>₹{calculateTotal().toFixed(2)}</h2>
            </div>
        </div>
    </div>
  )
}

export default Summary