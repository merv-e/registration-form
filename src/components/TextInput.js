import { questions } from "./helpers";

const TextInput = (props) => {
  return (
    <div className="alignment">
    {/* {
      questions.filter((q) => q.progressNo === props.progress).map((question) => 
      (
    <> */}
        <label htmlFor={props.for}>{props.label}</label>
        <input
          id={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
        />
    {/* </>
      ))
    } */}
    </div>
  );
};

export default TextInput;
