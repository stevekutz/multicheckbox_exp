import React, {useState, Fragment, Component} from 'react';
import {Button, Checkbox} 
        from 'semantic-ui-react';


export default class Semantic_checkbox extends Component {
    state = { checked: false }
    toggle = () => this.setState((prevState) => ({ checked: !prevState.checked }))
  
    render() {
      return (
        <div>
          <Button onClick={this.toggle}>Toggle it</Button>
          <Checkbox
            label='Check this box'
            onChange={this.toggle}
            checked={this.state.checked}
          />
        </div>
      )
    }
}