import { useState } from "react";
import "./UI/Buttons.css";

const Buttons = props => {

  const [progress, setProgress] = useState(1);

    const prev = () => {
      if (progress >= 1) {
        setProgress((progress) => progress - 1);
        props.update(progress);
      }; 
      // console.log("go to prev step");
      // console.log(progress);
    };
    
    const next = () => {
      if (progress <= 4) {
       setProgress((progress) => progress + 1);
        props.update(progress);
      } 
    };


  return (
    <div className="btn">
      <button 
       onClick={prev}
       disabled={progress === 1}
      >
        Prev
      </button>

      <button
        onClick={next}
        disabled={progress === 4}
      >
        Next
      </button>
    </div>
  );
}

export default Buttons