import "./UI/Form.css";
import FormInput from './FormInput';
import Buttons from './Buttons';

const Form = props => {
    const handleSubmit = (e) => {
      e.preventDefault();           
    };

    // Todo: 
    // 1 -form values to be saved. 
    // 2 - a list element (li) will be added with a key.  

    return (
      <form onSubmit={handleSubmit} className="form">
        <ul>
          <FormInput progress = {props.progress} />
        </ul>
        <Buttons
          progress={props.progress}
          next={props.next}
          prev={props.prev}
        />
      </form>
    );
}

export default Form
          