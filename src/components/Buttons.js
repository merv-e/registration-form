import { useContext } from "react";
import "./UI/Buttons.css";

import { ProgressContext } from "./store/progress-context";

const Buttons = props => {

  const ctx = useContext(ProgressContext);

  return (
    <div className="btn">
        <button
          id="1"
          form="form1" 
          type="text"
          onClick={ctx.prev}
          disabled={ctx.progress === 1}
        >Prev
        </button>
    {
      ctx.progress !== 4 
      ? (
          <button
            id="2" 
            type="text"
            onClick={ctx.next}
            disabled={ctx.progress === 4}
          >
            Next
          </button>
      )
      : (
          <button
            id="3"
            type="submit"
            className="register-btn"
            onClick = {props.handleSubmit}
          >Register   
          </button>
      )
    }
    </div>
  );
}

export default Buttons