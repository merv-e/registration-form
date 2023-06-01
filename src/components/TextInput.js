import { questions } from "./helpers";

const TextInput = (props) => {
   
  // Todo : password confirmation logic

  return (
    <div className="alignment">
    {
      questions.filter((q) => q.progressNo === props.progress).map((question) => 
      (
    <>
        <label htmlFor={props.for}>{question.label}</label>
        <input
          key={question.id}
          id={question.name}
          type={question.type}
          placeholder={question.placeholder}
          value={question.value}
          required
        />
    </>
      ))
    }
    </div>
  );
};

export default TextInput;
