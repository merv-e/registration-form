import { useContext, useEffect, useState } from "react";
import "./UI/Form.css";

import Buttons from './Buttons';
import Input from "./Input";
import { ProgressContext } from "./store/progress-context";

const Form = () => {
  const ctx = useContext(ProgressContext);

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

  // Todo:

  // - validity such as the "required" field should be dealt with.

  // - when prev is clicked- form values are vanishing --- it can be seen in the console.log but not in the input fields.

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    // function below that is supposed to reset the values doesn't work.

    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: "",
      };
    });

    ctx.onSubmit(true);
  };

  const updateValues = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });

    console.log("values are updated");
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div id="form1" className="form">
      <div className="alignment">
        <Input
          id="1"
          name="name"
          label="Name"
          for="name"
          type="text"
          placeholder="Your Name"
          progressNo="1"
          progress={ctx.progress}
          updateValues={updateValues}
          required
        />

        <Input
          required
          id="2"
          name="surname"
          for="surname"
          label="Surname"
          type="text"
          placeholder="Your Surname"
          progressNo="1"
          progress={ctx.progress}
          updateValues={updateValues}
        />

        <Input
          required
          id="3"
          name="occupation"
          for="occupation"
          label="Occupation"
          type="text"
          placeholder="Your Occupation"
          progressNo="2"
          progress={ctx.progress}
          updateValues={updateValues}
        />

        <Input
          required
          id="4"
          name="country"
          for="country"
          label="Country"
          type="text"
          placeholder="Your Country"
          progressNo="2"
          progress={ctx.progress}
          updateValues={updateValues}
        />

        <Input
          required
          id="10"
          name="email"
          for="email"
          label="E-mail"
          type="email"
          placeholder="Your E-mail Address"
          progressNo="3"
          progress={ctx.progress}
          updateValues={updateValues}
        />

        <Input
          required
          id="11"
          name="phone"
          for="phone"
          label="Phone Number"
          type="number"
          placeholder="Your Phone Number"
          progressNo="3"
          progress={ctx.progress}
          updateValues={updateValues}
        />

        <Input
          id="12"
          name="website"
          for="website"
          label="Website (if you have any)"
          type="website"
          placeholder="Your E-mail Address"
          progressNo="3"
          progress={ctx.progress}
          updateValues={updateValues}
        />

        <Input
          required
          id="13"
          name="password"
          for="password"
          label="Password"
          type="password"
          placeholder="Type a password"
          progressNo="4"
          progress={ctx.progress}
          updateValues={updateValues}
        />
      </div>
      <Buttons handleSubmit={handleSubmit} />
    </div>
  );
}

export default Form    