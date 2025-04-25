import logo from './logo.svg';
import './App.css';
import React from 'react';
import TextUpdater from './components/TextUpdater';
import HoverMessage from './components/HoverMessage';
import FocusBlur from './components/FocusBlur';

function App() {
  return (
     <div className="App">
     {/* <TextUpdater/> */}
    {/* <HoverMessage/> */}
    <FocusBlur/>
    </div>
  );
}

export default App;
