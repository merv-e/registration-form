import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ProgressBar from './components/ProgressBar';

function App() {
   const [progress, setProgress] = useState(1);

   const prev = () => {
     if (progress >= 1) {
       setProgress((progress) => progress - 1);
     }
   };

   const next = () => {
     if (progress <= 4) {
       setProgress((progress) => progress + 1);
      }
    };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <ProgressBar 
       progress={progress}
      />
      <Form
        progress={progress}
        prev = {prev}
        next ={next}
      />
    </div>
  );
}

export default App;
