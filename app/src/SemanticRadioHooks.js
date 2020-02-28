import React from 'react';
import {useState} from 'reinspect';

const SemanticRadioHooks = () => {
    const [radioState, setRadioState] = useState(true, "SRadio State");

    const toggleRadio = () => {
        setRadioState(!radioState)
    }

    return (
        <div>
        <button onClick = {toggleRadio}> This toggles radio </button>
        <input 
            type="radio" 
            id="genericRadio" name="other Radio" 
            checked = {radioState}
            onClick = {toggleRadio}
            />
        <label htmlFor="genericRadio">Generic Radio</label>
        
        
        </div>


    )

}

export default SemanticRadioHooks;