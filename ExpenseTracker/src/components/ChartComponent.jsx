import React, { useState } from "react";
import IncomeExpenseChart from "./IncomeExpenseChart";

function ChartComponent({transactions, visualize}){
    const [display, setDisplay] = useState("false");
    if(visualize){
        setDisplay("block")
    }else{
        setDisplay("none")
    }
    
    return(
        <div id="ChartContainer" style={{display:display}}>
            <h1>
                Income Expense Chart
            </h1>
            <button>Close</button>
            <IncomeExpenseChart data={transactions}/> 
        </div>
    )
}

export default ChartComponent;