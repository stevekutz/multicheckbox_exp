import React from 'react';
// import logo from './logo.svg';
import './App.css';

// verify update
// verify yarn & node


import MultiCheck from './MultiCheck';
import CheckBoxSemanticUI from './CheckBoxSemanticUI';
import Semantic_checkbox2 from './Semantic_checkbox2';
import SemanticCheckBoxHooks from './Semantic_checkbox_hooks';
import RainbowCheckbox from './RainbowCheckbox';
import RainbowCheckboxHooks from './RainBowCheckBoxHooks';
import SemanticRadioHooks from './SemanticRadioHooks';

const options = [{label: 'First Item'}, {label: 'Second Item'}];

function App() {
  return (
    <div>
        <MultiCheck 
             options = {options}
             onChange = {data => {
                 console.log(data);
             }}
        
        />
        <CheckBoxSemanticUI /> 
        <Semantic_checkbox2/>  
        <SemanticCheckBoxHooks/> 
        <RainbowCheckbox />
        <RainbowCheckboxHooks />
        <SemanticRadioHooks />

    </div>
  );
}

export default App;
