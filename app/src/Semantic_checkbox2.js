import React, {useState, Fragment, Component} from 'react';
import {Button, Checkbox} 
        from 'semantic-ui-react';
/*   
    import {PushSpinner, GuardSpinner, 
        PongSpinner, TraceSpinner} 
        from 'react-spinners-kit';

        import addReactNDevTools from 'reactn-devtools';
        addReactNDevTools();        
*/

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