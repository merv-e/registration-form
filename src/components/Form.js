import "./UI/Form.css";
import React, { useState } from 'react';
import {questions} from "./helpers"
import Buttons from './Buttons';
import FormInput from './FormInput';

const Form = props => {

    const handleSubmit = (e) => {
      e.preventDefault();           
    };

    const updateProgress = (progress) => {
      props.update(progress);
    };

    return (
      <form onSubmit={handleSubmit} className="form">
        <ul>
          {questions
            .map((question) => (
              <FormInput
                id={question.id}
                label={question.label}
                for={question.for}
                type={question.type}
                placeholder={question.placeholder}
                value={question.value}
              />
            ))}
        </ul>
        <Buttons
          update={(progress) => updateProgress(progress)}
        />
      </form>
    );

}

export default Form