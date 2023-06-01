import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ProgressBar from './components/ProgressBar';

function App() {
  
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    // the input should be reset to "".
    const registrationCompleted = () => {
      // setIsSubmitted(true); 
      console.log("A new page will be shown");
    };



  return (
    <div className="App">
      {
        isSubmitted ? (
          <div>
            <h2 className="successful-registration">
            Successfully registered!
            </h2>
          </div>
        ) : (
          <>
            <h1>Registration Form</h1>
              <ProgressBar progress={progress} />
              <Form
                registrationCompleted={registrationCompleted}
                progress={progress}
                prev={prev}
                next={next}
              />
          </>
      ) }
    </div>
  );
}

export default App;
