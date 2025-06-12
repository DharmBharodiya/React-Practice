import React from 'react'

import { Pie } from 'react-chartjs-2'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend);
  
function IncomeExpenseChart({transactions}){
    const income = transactions.filter((t) =>  t.amount > 0).reduce((acc, t) => acc + Number(t.amount), 0)
    const expense = transactions.filter((t) =>  t.amount < 0).reduce((acc, t) => acc + Number(t.amount), 0)

    const data = {
      labels: ['Income', 'Expense'],
      datasets: [
        {
          label: "₹",
          data: [income, expense],
          backgroundColor: ['#8ac926', '#ff595e'],
          borderColor: ['#388e3c', '#d32f2f'],
          borderWidth: 1,
        },
      ],
    };
    return (
        <div style={{ maxWidth: '400px', margin: '20px auto' }}>
          <h3>Income vs Expense</h3>
          <Pie data={data} />
        </div>
      );
  }

export default IncomeExpenseChart