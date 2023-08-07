import { useContext } from "react";
import { ProgressContext } from "./store/progress-context";

const Input = props => {
  const ctx = useContext(ProgressContext);

  // if you check the concole, required field is clearly added, however for some reason, it does not work.
   
  return (
    <>
      {parseInt(props.progressNo) === parseInt(ctx.progress) && (
        <>
          <label htmlFor={props.for}>{props.label}</label>
          <input
            name={props.name}
            id={props.name}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.updateValues}
            required
          />
        </>
      )}
    </>
  );
}

export default Input