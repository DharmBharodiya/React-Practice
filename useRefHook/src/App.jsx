import React, {useRef, useState} from 'react'

function App() {

  // useRef hook is used to store a mutable object, it basically has a single property called as current
  // this helps in tracking values without triggering rerender of components every single time the value changes
  // it could be helpful in accessing DOM, tracking previous values, storing mutable object

  // const trialRef = useRef(8)

  const inputRef = useRef(null)

  const keypressCountRef = useRef(0)

  const [count, setCount] = useState(0)

  const handleKeyDown = () => {
    keypressCountRef.current += 1;
  }
  const handleFocus = () => {
    inputRef.current.focus();
  }

  const showKeyPressCount = () => {
    setCount(keypressCountRef.current)
  }

  return (
    // <div>CurrentValue of ref: {trialRef.current} {console.log(trialRef)}</div>
   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Input Tracker</h1>
        <input
          ref={inputRef}
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="Type here..."
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex space-x-4 mb-4">
          <button
            onClick={handleFocus}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Focus Input
          </button>
          <button
            onClick={showKeyPressCount}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Show Key Press Count
          </button>
        </div>
        <p className="text-lg">
          Key Presses: <span className="font-semibold">{count}</span>
        </p>
      </div>
    </div>
  
  )
}

export default App