import "./UI/Form.css";
import FormInput from './FormInput';
import Buttons from './Buttons';

import TextInput from "./TextInput";

const Form = props => {
    const handleSubmit = (e) => {
      e.preventDefault();           
    };

    // Todo: 
    // 1 -form values to be saved. 

    return (
      <form onSubmit={handleSubmit} className="form">
        <TextInput progress = {props.progress} />
        <Buttons
          progress={props.progress}
          next={props.next}
          prev={props.prev}
        />
      </form>
    );
}

export default Form
          