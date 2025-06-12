import {useState} from 'react';

export default function Counter() {

    const [count, setCount] = useState(0);
    function countIncrease(){
        setCount(prevCount => prevCount + 1)
    }

    console.log(count)
    return (
        <button onClick={countIncrease}>Counter {count}</button>
    )
}