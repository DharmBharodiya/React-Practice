import React,{useState, useMemo} from 'react'

function App() {

  const [number, setNumber] = useState(10)
  const [multiplier, setMultiplier] = useState(1)

  const fibonacciCalculator = (num) => {
    console.log("Calculating fibonacci")
    if(num <= 1) return num;
    let a = 0
    let b = 1
    let temp;
    for(let i = 2; i <= num; i++){
      temp = a + b;
      a = b;
      b = temp;
    }

    return b
  }

  const memoizedFibonnaci = useMemo(() => fibonacciCalculator(number), [number])

  return (
    <div>
      <h2>useMemo Example</h2>
      <input
      type="number"
      value={number}
      onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <p>Fibonacci of {number}: {memoizedFibonnaci}</p>

      <button onClick={() => setMultiplier(m => m + 1)}>
        Change Multiplier ({multiplier})
      </button>
      <p>Multiplier: {multiplier}</p>
      <p>Product: {memoizedFibonnaci * multiplier}</p>
      {/* Notice that changing multiplier doesn't re-calculate Fibonacci */}
    </div>
  )
}

export default App