import { useState } from "react";
import styles from "./UI/RadioCheckbox.module.css";
const RadioCheckbox = props => {
  
  const [formData, setFormData] = useState({
    gender: "",
    language: "",
  }); 

  const handleInput = (e) => {
    setFormData(prev => { 
      return {...prev, [e.target.name]: e.target.value} 
    });
  };
  
  console.log(formData); 

  return (
    <div className={styles["big-container"]}>
      <p>{props.qname}</p>
      <ul className={styles.container}>
        {props.values.map((q) => (
            <li key={q.id} className={styles["inner-container"]}>
              <input 
               id={q.id} 
               type={q.type} 
               name={q.name} 
               onChange={handleInput}
                // required
               />
              <label htmlFor={q.for}>{q.label}</label>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioCheckbox

