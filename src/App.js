import { useContext, useEffect } from 'react';
import './App.css';

import Form from './components/Form';
import ProgressBar from './components/ProgressBar';

import ProgressContextProvider, { ProgressContext } from './components/store/progress-context';

function App() {

  const ctx = useContext(ProgressContext);

    // useEffect(() => {
    //   console.log(ctx);

    // }, [ctx]); 

  return (
    <div className="App">
      {
        ctx.isSubmitted ? (
          <div>
            <h2 className="successful-registration">
            Successfully registered!
            </h2>
          </div>
        ) : (
          <>
            <h1>Registration Form</h1>
              <ProgressBar />
              <Form />
          </>
      ) }
    </div>
  );
}

export default App;
