import React, {useState} from 'react';
import './InvoicePage.css';

import { useAuth } from '../context/AuthContext';
import BusinessInfo from '../components/BusinessInfo';
import ClientInfo from '../components/ClientInfo';
import Items from '../components/Items';
import Summary from '../components/Summary';

const InvoicePage = () => {

    const { user, logout} = useAuth();
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    const [businessInfo, setBusinessInfo] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
    });

    const [clientInfo, setClientInfo] = useState({
        name: '',
        company: '',
        address: '',
    });

    const [items, setItems] = useState([
        {description: '', quantity: 1, rate: 0}
    ])

    const [tax, setTax] = useState(0)
    const [discount, setDiscount] = useState(0)

    const handleReset = () => {
    setBusinessInfo({ name: '', address: '', email: '', phone: '' });
    setClientInfo({ name: '', company: '', address: '' });
    setItems([{ description: '', quantity: 1, rate: 0 }]);
    setTax(0);
    setDiscount(0);
  };

    const handlePrint = () => {
        window.print()
    }

    return(
        <div className='invoice-page'>
            <header className="invoice-header">
                <h1>Invoice Generator</h1>
                <div>
                    <label>Invoice Generator</label>
                    <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}                    
                    />
                </div>
                <div className='user-info'>
                    Logged in as: <strong>{user?.email}</strong>
                    <button onClick={logout}>Log Out</button>
                </div>
            </header>

            <BusinessInfo data={businessInfo} setData={setBusinessInfo}/>
            <ClientInfo data={clientInfo} setData={setClientInfo}/>
            <Items items={items} setItems={setItems}/>
            <Summary items={items} tax={tax} setTax={setTax} discount={discount} setDiscount={setDiscount}/>

            <div className='invoice-actions'>
                <button onClick={handlePrint}>Print</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )

}

export default InvoicePage;