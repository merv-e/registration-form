import "./UI/Form.css";
import Buttons from './Buttons';
import FormInput from './FormInput';
import {questions} from "./helpers"

const Form = props => {

    const handleSubmit = (e) => {
      e.preventDefault();           
    };

    return (
      <form onSubmit={handleSubmit} className="form">
        <ul>
        {/* still getting the warning in the console that not giving a child a unique key */}
          {questions
            .filter((q) => q.progressNo === props.progress)
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
          progress={props.progress}
          next = {props.next}
          prev = {props.prev}
        />
      </form>
    );

}

export default Form