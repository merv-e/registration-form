import { useState } from "react";
import { questions } from "./helpers";

const TextInput = (props) => {
   
  // Todo : password confirmation logic

  return (
    <ul className="alignment">
    {
      questions.filter((q) => q.progressNo === props.progress).map((question) => 
      (
      <li key={question.id}>
        <label htmlFor={question.for}>{question.label}</label>
        <input
          name={question.name}
          id={question.name}
          type={question.type}
          placeholder={question.placeholder}
          onChange={props.updateValues}
          // required
        />
      </li>
      ))
    }
    </ul>
  );
};

export default TextInput;
