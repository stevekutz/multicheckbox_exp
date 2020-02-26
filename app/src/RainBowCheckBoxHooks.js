import React, {Components} from 'react';
import {Card, Button, CheckboxGroup} from 'react-rainbow-components';
import {useState} from 'reinspect';

const options = [
    { value: 'checkboxOne', label: 'Hooks Checkbox One', disabled: false },
    { value: 'checkboxTwo', label: 'Hooks Checkbox Two', disabled: false },
    { value: 'checkboxThree', label: 'Hooks Checkbox Three', disabled: false },
];

const RainbowCheckboxHooks = () => {
    // constructor(props) {
    //     super(props);
    //     this.state = { values: [] };
    //     this.handleOnChange = this.handleOnChange.bind(this);
    // }

    const [checkState, setCheckState] = useState(true, "RHooks State");
    const [hvalues, setValue] = useState([], "RHvalues state");

    const handleOnChange = (hvalues) => {
        setValue({ hvalues });
        console.log('Hooks$$$$$ ', hvalues);
    }

        return (
            <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
                <CheckboxGroup
                    id="checkbox-group-2"
                    label="Checkbox HGroup Label"
                    options={options}
                    value={hvalues}
                    onChange={handleOnChange} />
            </div>
        );

}

export default RainbowCheckboxHooks;