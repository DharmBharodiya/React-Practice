import {useState} from 'react'

function PhaseForm() {

  const [step, setStep] = useState(1)
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form className='mt-4' onSubmit={(e) => e.preventDefault()}>
    
        {step === 1 && (
          <input
        type="text"
        placeholder='First Name'
        className= 'px-4 py-1 rounded-md mr-2 bg-white'
        onChange={(e) => setFirstname(e.target.value)}
        value={firstname}
        />
        )}
        {step === 2 && (
          <input
        type="text"
        placeholder='Last Name'
        className= 'px-4 py-1 rounded-md mr-2 bg-white'
        onChange={(e) => setLastname(e.target.value)}
        value={lastname}
        />
        )}
        {step === 3 && (
          <input
        type="email"
        placeholder='Email'
        className= 'px-4 py-1 rounded-md mr-2 bg-white'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
        )}
        {step === 4 && (
          <input
        type="Password"
        placeholder='Password'
        className= 'px-4 py-1 rounded-md mr-2 bg-white'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
        )}
        {step === 5 && (
          <input
        type="submit"
        placeholder='Submit'
        className= 'bg-black text-red-500 py-1 px-4 rounded-md hover:bg-red-500 border-2 border-red-500 hover:cursor-pointer transition-all duration-75 hover:text-black mr-2'
        onChange={(e) => setPassword(e.target.value)}
        value="Submit"
        />
        )}
        {step > 1 && (
          <button
          type="button"
          onClick={() => setStep(prev => prev - 1)}
          className='bg-black text-white py-1 px-4 rounded-md hover:bg-white border-2 border-white hover:cursor-pointer transition-all duration-75 hover:text-black mr-2'
          >Back</button>
        )}
        {step < 5 && (
          <button
            type="button"
            onClick={() => setStep(prev => prev + 1)}
            className='bg-black text-white py-1 px-4 rounded-md hover:bg-white border-2 border-white hover:cursor-pointer transition-all duration-75 hover:text-black'
          >
            Next
          </button>
        )}
    </form>
  )
}

export default PhaseForm