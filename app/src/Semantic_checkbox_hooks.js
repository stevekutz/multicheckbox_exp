import React from 'react';
import {useState} from 'reinspect';

const SemanticCheckBoxHooks = () => {
    const [checkedState, setCheckedState] = useState(true, "SCheckeded State");

    const toggleChecked = () => {
        setCheckedState(!checkedState)
    }

    return (
        <div>
        <button onClick = {toggleChecked}> This also toggles </button>
        <input 
            type="checkbox" 
            id="genericCheckbox" name="scales" 
            checked = {checkedState}
            onChange = {toggleChecked}
            />
        <label htmlFor="genericCheckbox">Generic CheckBox</label>
        
        
        </div>


    )

}

export default SemanticCheckBoxHooks;