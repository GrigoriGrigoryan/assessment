import './convertor.css';
import { useState } from "react";
import { splitInput } from '../../func';

const Convertor = () => {
    const [value, setValue] = useState<number>(0)
    const [numText, setNumText] = useState<string>('')

    const convert = () => {

        if (value < 999_999_999_999_999) {
            setNumText(splitInput(value))
        } else if (value > 999_999_999_999_999) {
            setNumText('Range Error')
        } else {
            setNumText('Please check input data')
        }
    }

    return (
        <section>
            <input id="input" type="number" min={0} max={999_999_999_999_999} onChange={(event) => setValue(+event.target.value)} placeholder="Type something" />
            <button id="button" onClick={convert}>Print Input</button>
            <h2 id="output">{numText}</h2>
        </section>
    )
}

export default Convertor;