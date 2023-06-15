import "./UI/Form.css";

import FormInput from './FormInput';
import Buttons from './Buttons';

import TextInput from "./TextInput";
import { useState } from "react";

const Form = props => {

    const [formData, setFormData] = useState({
      name: "",
      surname: "",
      country: "",
      occupation: "",
      // gender: "",
      // language: "",
      email: "",
      phone: "",
      website: "",
      password: "",
    }); 

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted!");

      // setFormData((prev) => {
      //   return { 
      //     ...prev, 
      //     [e.target.name]: "" 
      //   };
      // });
      props.registrationCompleted();
    };

    const updateValues = (e) => {
      setFormData((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
      console.log("values are updated");

    };
      console.log(formData); 

    // Todo: 
    // 1 -form values should be saved. 
    // 2- when prev is clicked- form values are vanishing --- it can be seen in the console.log but not in the input fields.

    return (
      <form onSubmit={handleSubmit} className="form">
        <TextInput 
          progress = {props.progress} 
          updateValues={updateValues}
        />
        <Buttons
          progress={props.progress}
          next={props.next}
          prev={props.prev}
          handleSubmit = {handleSubmit}
        />
      </form>
    );
}

export default Form
          