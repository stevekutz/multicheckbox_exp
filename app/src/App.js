import React from 'react';
// import logo from './logo.svg';
import './App.css';

import MultiCheck from './MultiCheck';
import CheckBoxSemanticUI from './CheckBoxSemanticUI'

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

    </div>
  );
}

export default App;
