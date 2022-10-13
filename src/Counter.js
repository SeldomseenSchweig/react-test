import React, {useState} from "react"

const Counter = () => {
    const [count, setCount] = useState(1)

    return <>
    <h1>Count is: {count}</h1>
    <button onClick={()=>setCount(count+1)}>Add</button>
    </>
}

export default Counter;