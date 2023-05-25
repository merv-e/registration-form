import React, { useState } from 'react';
import Buttons from './Buttons';
import "./UI/Form.css";

const Form1 = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      setName("");
      setSurname("");
      setIsSubmitted(true);
    };

    return (
      <form 
       onSubmit={handleSubmit}
       className="form"
      >
        <div className="gap">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>
        <div className="gap">
          <label htmlFor="name">Surname</label>
          <input
            type="text"
            placeholder="Your Surname"
            value={surname}
            onChange={(ev) => setSurname(ev.target.value)}
          />
        </div>
          <Buttons
            onSubmit= {handleSubmit}
          />
      </form>
    );

}

export default Form1