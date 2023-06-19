import React, {
  createContext, 
  useState, 
  } from "react";

export const ProgressContext =
  // React.
  createContext({
    progress: "",
    prev: "",
    next: "",
  }); 


const ProgressContextProvider = props => {
  
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

  return <ProgressContext.Provider value=
  {{
    progress: progress, 
    prev: prev,
    next: next,
    isSubmitted: isSubmitted, 
    onSubmit: setIsSubmitted,
  }}
  >
    {props.children}
  </ProgressContext.Provider>
}

export default ProgressContextProvider;