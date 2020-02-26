import React, {Components} from 'react';
import {Card, Button, CheckboxGroup} from 'react-rainbow-components';

const options = [
    { value: 'checkboxOne', label: 'Checkbox One', disabled: false },
    { value: 'checkboxTwo', label: 'Checkbox Two', disabled: false },
    { value: 'checkboxThree', label: 'Checkbox Three', disabled: false },
];

const RainbowCheckboxHooks = () => {
    // constructor(props) {
    //     super(props);
    //     this.state = { values: [] };
    //     this.handleOnChange = this.handleOnChange.bind(this);
    // }

    const [checkState, setCheckState] = useState(true, "RHooks State");
    const [values, setValue] = useState([], "values state");

    const handleOnChange = (values) => {
        setCheckState({ values });
        console.log('$$$$$ ', values);
    }

        return (
            <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
                <CheckboxGroup
                    id="checkbox-group-1"
                    label="Checkbox Group Label"
                    options={options}
                    value={values}
                    onChange={handleOnChange} />
            </div>
        );

}

export default RainbowCheckboxHooks;