import React, {useState} from 'react'
import './Inputbox.css'

function InputBox({
    label,
    onAmountChange,
    onCurrencyChange,
    amount,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
    theId,
}){

return (
    <div id='inputBox'>
        <div id='theInputSide'>
            <label>
                {label}
            </label>
            <input
            disabled={amountDisable}
            value={amount}
            type='number'
            placeholder='Amount'
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            id={theId}
            />
        </div>
        
        <div id='theCurrencySide'>
            <label id='currencyLabel'>Currency Type</label>
            <select
            value={selectCurrency} 
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}

            </select>
        </div>

    </div>
)
    
}

export default InputBox;