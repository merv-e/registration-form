import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ProgressBar from './components/ProgressBar';

function App() {

  const updateProgress = (progress) => {
      console.log(progress);
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <ProgressBar update={(progress) => updateProgress(progress)} />
      <Form
        update={(progress) => updateProgress(progress)}
      />
    </div>
  );
}

export default App;
