import React, {useState} from 'react'

function LoginPage() {

  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    let newUser = {
        id: Date.now(),
        username: name,
        userpass: password,
    }
    setUsers([...users, newUser]);
    console.log(users)
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}          
            placeholder='Username'
            />
            <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Password'
            />
            <button type='submit'>Login</button>
        </form>
    </>
  )
}

export default LoginPage