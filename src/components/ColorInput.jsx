import { useState } from "react"

function ColorInput() {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <input 
                value={text}
                className="border-2 border-gray-500"
                onChange={handleChange}
                type="text" />
            <div className="w-20 h-20" 
                style={{backgroundColor: text}}>
            </div>
        </div>
    )
}

export default ColorInput