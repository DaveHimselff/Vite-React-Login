import { useState } from "react"

function IncrementDecrement() {
    const [count, setCount] = useState(0);

    function incrementDecrement(value) {
        setCount(count + value);
    }

    return (
        <h1 className="text-3xl font-bold underline">
            Count: {count}
            <br/>
            <button className="border-2 border-gray-500" 
                    onClick={() => incrementDecrement(1)}>
                        Increment
            </button>
            <button onClick={() => incrementDecrement(-1)}>Decrement</button>
        </h1>
    )
}

export default IncrementDecrement;