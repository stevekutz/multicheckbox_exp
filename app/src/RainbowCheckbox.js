import React, {Components} from 'react';
import {Card, Button, CheckboxGroup} from 'react-rainbow-components';

const options = [
    { value: 'checkboxOne', label: 'Checkbox One', disabled: false },
    { value: 'checkboxTwo', label: 'Checkbox Two', disabled: false },
    { value: 'checkboxThree', label: 'Checkbox Three', disabled: false },
];

class RainbowCheckbox extends React.Component {
    // removed props
    constructor() {
        super();
        this.state = { values: [] };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(values) {
        this.setState({ values });
        console.log('$$$$$ ', values);
    }

    render() {
        const { values } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
                <CheckboxGroup
                    id="checkbox-group-"
                    label="Checkbox Group Label"
                    options={options}
                    value={values}
                    onChange={this.handleOnChange} />
            </div>
        );
    }
}

export default RainbowCheckbox;