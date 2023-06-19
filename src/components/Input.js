import { useContext, useEffect } from "react";

import { ProgressContext } from "./store/progress-context";

const Input = props => {

  const ctx = useContext(ProgressContext);

  // useEffect(() => {
  //   // console.log(props);
  //   console.log(ctx);
  // }, [ctx]);

  return (
    <div className="alignment">
      {
        parseInt(props.progressNo) === parseInt(ctx.progress) && (
        <>
          <label htmlFor={props.for}>{props.label}</label>
          <input
            name={props.name}
            id={props.name}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.updateValues}
          />
        </>
      )}
    </div>
  );
}

export default Input