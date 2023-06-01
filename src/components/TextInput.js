import { useState } from "react";
import { questions } from "./helpers";

const TextInput = (props) => {
   
  // Todo : password confirmation logic ==> const validation = question.type === "password"

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    country: "",
    occupation: "",
    gender: "",
    language: "",
    email_address: "",
    phone_number: "",
    website: "",
    password: "",
  }); 

  const handleInput = (e) => {
    setFormData(prev => { 
      return {...prev, [e.target.name]: e.target.value} 
    });
  };
  
console.log(formData);

  return (
    <ul className="alignment">
    {
      questions.filter((q) => q.progressNo === props.progress).map((question) => 
      (
      <li key={question.id}>
        <label htmlFor={question.for}>{question.label}</label>
        <input
          key={question.id}
          name={question.name}
          id={question.name}
          type={question.type}
          placeholder={question.placeholder}
          // value={} 
          onChange={handleInput}
          // required
        />
      </li>
      ))
    }
    </ul>
  );
};

export default TextInput;
