
import React from 'react'
import './BusinessInfo.css';

const BusinessInfo = ({data, setData}) => {

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData(prev => ({...prev, [name]:value}))
  }

  return (
    <div>
      <div className='section'>
        <h2>Business Information</h2>
        <div className="form-group">
            <label>Business Name:</label>
            <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="e.g. ABC Corp."
            />
        </div>
        <div className="form-group">
            <label>Address</label>
            <input
            type="text"
            placeholder="e.g. 123 Main St, City, Country"
            name="address"
            onChange={handleChange}
            value={data.address}
            />
        </div>
        <div className="form-group">
            <label>Phone</label>
            <input
            type="number"
            name='phone'
            onChange={handleChange}
            placeholder="e.g. 987854...."
            value={data.phone}
            />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input
            type="email"
            name='email'
            onChange={handleChange}
            placeholder="e.g. dharm@work.com"
            value={data.email}
            />
        </div>
        </div>
    </div>
  )
}

export default BusinessInfo