import React from 'react';
// import logo from './logo.svg';
import './App.css';

// verify update
// verify yarn & node


import MultiCheck from './MultiCheck';
import CheckBoxSemanticUI from './CheckBoxSemanticUI';
import Semantic_checkbox2 from './Semantic_checkbox2';
import SemanticCheckBoxHooks from './Semantic_checkbox_hooks';

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

    </div>
  );
}

export default App;
