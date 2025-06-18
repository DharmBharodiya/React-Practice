import React from 'react'

function ClientInfo({data, setData}) {

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((prev) => ({...prev, [name]:value}))
    }

  return (
    <div className='section client-info'>
        <h2>Client Info.</h2>
        <div className="form-group">
            <label>Name</label>
            <input
            type="text"
            name='name'
            onChange={handleChange}
            value={data.name}
            placeholder='e.g. Ryan Duckling'
            />
        </div>
        <div className="form-group">
            <label>Address</label>
            <input
            type="text"
            name='address'
            onChange={handleChange}
            value={data.address}
            placeholder='e.g. San Francisco'
            />
        </div>
        <div className="form-group">
            <label>Phone</label>
            <input
            type="text"
            name='phone'
            onChange={handleChange}
            value={data.phone}
            placeholder='e.g. +91 93435 543..'
            />
        </div>
        <div className="form-group">
            <label>E-mail:</label>
            <input
            type="email"
            name='email'
            onChange={handleChange}
            value={data.email}
            placeholder='e.g. jake@sharma.com'
            />
        </div>
    </div>
  )
}

export default ClientInfo