import React from 'react'

function BusinessInfo({data, setData}) {

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((prev) => ({...prev,[name]:value}))
    }

  return (
    <div className='section  business-info'>
        <h2>Buiness Info</h2>
        <div className="form-group">
            <label>Name</label>
            <input
            type="text"
            name='name'
            onChange={handleChange}
            placeholder='e.g. DHRM Pvt Ltd.'
            value={data.name}
            />
        </div>
         <div className="form-group">
            <label>Address</label>
            <input
            type="text"
            name='address'
            onChange={handleChange}
            placeholder='e.g. 70th Street, Brooklyn, NY'
            value={data.address}
            />
        </div>
    </div>
  )
}

export default BusinessInfo