import React from 'react';
import {useState} from 'reinspect';

const SemanticCheckBoxHooks = () => {
    const [checkedState, setCheckedState] = useState(true, "SCheckeded State");

    const toggleChecked = () => {
        setCheckedState(!checkedState)
    }

    return (
        <div>
        <input type="checkbox" id="scales" name="scales" checked = {checkedState}/>
        <label for="scales">Scales</label>
        
        
        </div>


    )

}

export default SemanticCheckBoxHooks;