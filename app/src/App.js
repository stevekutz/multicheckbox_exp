import React from 'react';
import logo from './logo.svg';
import './App.css';

import MultiCheck from './MultiCheck';

const options = [{label: 'First Item'}, {label: 'Second Item'}];

function App() {
  return (
    <div className="App">
        <MultiCheck 
             options = {options}
             onChange = {data => {
                 console.log(data);
             }}
        
        />
    </div>
  );
}

export default App;
