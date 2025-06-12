import { useState } from 'react'
import {InputBox} from "./components"
import useCurrencyInfo  from './hooks/useCurrencyInfo'
import './App.css'

function App() {
    
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo);
    

    const swap = () => {

        const oldFrom = from;
        const oldTo = to;
        const oldAmount = amount;
        const oldConvertedAmount = convertedAmount;

        setFrom(oldTo);
        setTo(oldFrom);
        setAmount(oldConvertedAmount);
        setConvertedAmount(oldAmount);
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    }
  
    return (

        <>
        <div id='main-container'>
            <div id='form-container'>
                <form onSubmit={
                    (e) => {
                        e.preventDefault();
                        convert();
                    }
                }>
                {/** input box 1 for the from */}
                <div>
                    <InputBox 
                    label="From"
                    amount={amount}
                    onAmountChange={(amount) => setAmount(amount)}
                    onCurrencyChange={(currency) => setFrom(currency)}
                    selectCurrency={from}
                    currencyOptions={options}
                    theId="fromInputBox"  
                    className="theInputBox"                
                    />
                </div>

                <div id='swap-container'>
                    <button type="button" onClick={swap}>Swap</button>
                </div>

                <div>
                <InputBox 
                    label="To"
                    amount={convertedAmount}
                    amountDisable
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={to}
                    currencyOptions={options} 
                    theId="toInputBox"  
                    className="theInputBox"                   
                    />
                </div>
                <div id='submitBtnContainer'>
                    <button type="submit">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </div>

                </form>
            </div>






        </div>
        </>


    )

}

export default App
