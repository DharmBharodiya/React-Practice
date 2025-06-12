import {useState, useEffect} from 'react';


function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        //this inside console log only runs when there is any change in the currency thats when useeffect will run, and also first when the component is initially mounted
        console.log(data)
    }, [currency])
    // console.log(data)
    //this outside console log runs a several times when thhe component is rendered, it runs everytime with it
    return data
}

export default useCurrencyInfo;