import { questions } from "./helpers";

const TextInput = (props) => {
  return (
    <div className="alignment">
    {
      questions.filter((q) => q.progressNo === props.progress).map((question) => 
      (
    <>
        <label htmlFor={question.for}>{question.label}</label>
        <input
          id={question.name}
          type={question.type}
          placeholder={question.placeholder}
          value={question.value}
        />
    </>
      ))
    }
    </div>
  );
};

export default TextInput;
