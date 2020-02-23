import React from 'react';
import {useState} from 'reinspect';

const SemanticCheckBoxHooks = () => {
    const [checkedState, setCheckedState] = useState(true, "SCheckeded State");

    const toggleChecked = () => {
        setCheckedState(!checkedState)
    }

    return (
        <div>
        <input 
            type="checkbox" 
            id="genericCheckbox" name="scales" 
            checked = {checkedState}
            onChange = {toggleChecked}
            />
        <label for="genericCheckbox">Generic CheckBox</label>
        
        
        </div>


    )

}

export default SemanticCheckBoxHooks;