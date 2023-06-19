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

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted!");

      // setFormData((prev) => {
      //   return { 
      //     ...prev, 
      //     [e.target.name]: "" 
      //   };

      // }); 
      
      // ctx.onSubmit(true); 
    
    };

    const updateValues = (e) => {
      setFormData((prev) => {
        return { 
          ...prev, 
          [e.target.name]: e.target.value 
        };
      });
      
      console.log("values are updated");
    };

    // useEffect(() => {
    //   console.log(formData); 
 
    // }, [formData ]);

    // Todo: 
    // 1 -form values should be saved. 
    // 2- when prev is clicked- form values are vanishing --- it can be seen in the console.log but not in the input fields.

    return (
      <form onSubmit={handleSubmit} className="form">
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
        />

        <Input
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

        {/* IMPORTANT NOTE: Input id's 5 to 9 are not going to be used for now. */}

        <Input
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

        <Buttons handleSubmit={handleSubmit}/>
      </form>
    );
}

export default Form    

//  <Input
        //   id="5"
        //   name=""
        //   for=""
        //   label=""
        //   type="radio"
        //   // placeholder="Your "
        //   // progressNo="2"
        //   progress={ctx.progress}
        //   value=""
        // updateValues={updateValues}
        // />

        // <Input
        //   id="6"
        //   name=""
        //   for=""
        //   label=""
        //   type="radio"
        //   // placeholder="Your "
        //   // progressNo="2"
        //   progress={ctx.progress}
        //   value=""
        // />

        // <Input
        //   id="7"
        //   name=""
        //   for=""
        //   label=""
        //   type="checkbox"
        //   // placeholder="Your "
        //   // progressNo="2"
        //   progress={ctx.progress}
        //   value=""
        // />

        // <Input
        //   id="8"
        //   name=""
        //   for=""
        //   label=""
        //   type="checkbox"
        //   // placeholder="Your "
        //   // progressNo="2"
        //   progress={ctx.progress}
        //   value=""
        // />

        // <Input
        //   id="9"
        //   name=""
        //   for=""
        //   label=""
        //   type="checkbox"
        //   // placeholder="Your "
        //   // progressNo="2"
        //   progress={ctx.progress}
        //   value=""
        // />

        /* 
        CONFIRM PASSWORD 
        */

        //         {
        //           /* <Input
        //   id="14"
        //   name="password"
        //   for="password"
        //   label="Password"
        //   type="password"
        //   placeholder="Confirm password"
        //   progressNo="4"
        //   progress={ctx.progress}
     
        //   updateValues={updateValues}
        // /> */
        //         }