import React, { useState } from 'react'
import {useAuth} from '../context/UserContext'
import BusinessInfo from '../components/BusinessInfo';
import ClientInfo from '../components/ClientInfo';
import Items from '../components/Items';
import Summary from '../components/Summary';
import './InvoicePage.css'

function InvoicePage() {

    const {logout} = useAuth()
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

    const handleReset = () => {
        setBusinessInfo({name: "", address: ""})
        setClienInfo({name:"", address:"", phone:0, email:""})
        setItems([{description: '', quantity: '', price: ""}])
        setTax(0)
        setDiscount(0)
    }

    const handlePrint = () => {
        // const printContents = document.querySelector('.invoice-container').cloneNode(true);
        // const buttons = printContents.querySelectorAll('.action-buttons, button');
        // buttons.forEach(button => button.remove());

        // const printWindow = window.open('', '_blank');
        // printWindow.document.write('<html><head><title>Invoice</title></head><body>');
        // printWindow.document.write(printContents.outerHTML);
        // printWindow.document.write('</body></html>');
        // printWindow.document.close();
        // printWindow.print();

        window.print()
    }

  return (
    <div className='invoice-container'>
        <header>
            <h2>Invoice</h2>
            <h3>{date}</h3>
            <div className='user-info'>
                    <p>Logged in as: <strong>{currentUser?.email}</strong></p>
                    <button onClick={logout}>Log Out</button>
             </div>
        </header>
        <BusinessInfo data={businessInfo} setData={setBusinessInfo} />
        <ClientInfo data={clientInfo}  setData={setClienInfo}/>
        <Items items={items} setItems={setItems} />
        <Summary items={items} setDiscount={setDiscount} setTax={setTax} tax={tax} discount={discount}/>
        <div className='action-buttons'>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handlePrint}>Print</button>
        </div>
    </div>
  )
}

export default InvoicePage