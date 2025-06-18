import React, { useState } from 'react'
import {useAuth} from '../context/UserContext'
import BusinessInfo from '../components/BusinessInfo';
import ClientInfo from '../components/ClientInfo';
import Items from '../components/Items';
import Summary from '../components/Summary';
import './InvoicePage.css'

function InvoicePage() {

    const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const {currentUser} = useAuth();

    const [businessInfo, setBusinessInfo] = useState({
        name: "",
        address: ""
    })
    const [clientInfo, setClienInfo] = useState({
        name: "",
        address: "",
        phone: "",
        email: ""
    })

    const [items, setItems] = useState([
        {id: 1, description: '', quantity: 1, price: 0}
    ])
    const [tax, setTax] = useState(0)
    const [discount, setDiscount] = useState(0)

  return (
    <div className='invoice-container'>
        <header>
            <h2>Invoice</h2>
            <h2>{date}</h2>
            <h2>Logged In as: {currentUser?.email}</h2>
        </header>
        <BusinessInfo data={businessInfo} setData={setBusinessInfo} />
        <ClientInfo data={clientInfo}  setData={setClienInfo}/>
        <Items items={items} setItems={setItems} />
        <Summary items={items} setDiscount={setDiscount} setTax={setTax} tax={tax} discount={discount}/>

    </div>
  )
}

export default InvoicePage