import { useContext, useEffect, useReducer } from "react";
import "./UI/Form.css";

import Buttons from './Buttons';
import Input from "./Input";

import { reducer, initState } from "./reducer/reducer";
import { ProgressContext } from "./store/progress-context";

const Form = () => {
  
/*   
  TODOS:
    - reset values after form is submitted and implement useReducer instead of useState

    - validity such as the "required" field should be dealt with.
    - when prev is clicked- form values are vanishing --- it can be seen in the console.log but not in the input fields. 
  */

  
  // Context API has our initial data and instead of using props we are sending the data across the app by using context (note that, this can not replace useState!).

  const ctx = useContext(ProgressContext);

  const [formState, dispatch] = useReducer(reducer, initState);

  const updateValues = (e) => {
    dispatch({
      type: "HANDLE_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    
    ctx.onSubmit(true);
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

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