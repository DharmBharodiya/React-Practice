import React from 'react'
import './ClientInfo.css';

function ClientInfo({data, setData}) {

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((prev) => ({...prev, [name]:value}))
    }

  return (
    <div className="section client-info">
        <h2>Client Information</h2>
        <div className='form-group'>
            <label>Client Name</label>
            <input
            type='text'
            name='name'
            value={data.name}
            onChange={handleChange}
            placeholder='e.g. Mukesh'
            />
        </div>
        <div className='form-group'>
            <label>Company</label>
            <input
            type='text'
            name='company'
            value={data.company}
            onChange={handleChange}
            placeholder='e.g. Dharm Pvt. Ltd.'
            />
        </div>
        <div className='form-group'>
            <label>Address</label>
            <input
            type="text"
            onChange={handleChange}
            value={data.address}
            placeholder='e.g. 45th Street, NYC'
            name='address'
            />
        </div>
    </div>
 )
}

export default ClientInfo