import "./UI/Form.css";
import {questions} from "./helpers";

import FormInput from './FormInput';
import Buttons from './Buttons';

import TextInput from "./TextInput";
import styles from "./UI/RadioCheckbox.module.css";
// import Deneme from "./Deneme";
// import RadioCheckbox from "./RadioCheckbox";
import FormVerileri from "./FormVerileri";

const Form = props => {

    const handleSubmit = (e) => {
      e.preventDefault();           
    };

    // {/* still getting the warning in the console that not giving a child a unique key */}
    
    return (
      <form onSubmit={handleSubmit} className="form">
        <ul>
        {
          questions.filter(q => q.progressNo === props.progress).map(question =>
            <FormInput
              progress = {props.progress}
              id={question.id}
              label={question.label}
              for={question.for}
              type={question.type}
              placeholder={question.placeholder}
              value={question.value}
            />
          )
        }
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

// className={isRadioOrCheckbox && styles["big-container"]}

// className={isRadioOrCheckbox && styles.container}

// <p>{props.type === "radio" && "Gender"}</p>


    // const checkbox = questions.filter(q => q.type === "checkbox");
    // const radio = questions.filter(q => q.type === "radio");
      // const isRadioOrCheckbox = questions.filter(
      //   (q) => q.type === "checkbox" || q.type === "radio"
      // );



                  //  {
                  //    isRadioOrCheckbox ? (
                  //      <div className={styles["big-container"]}>
                  //        <p>
                  //          {radio === true
                  //            ? "Gender"
                  //            : checkbox === true
                  //            ? "Language"
                  //            : ""}
                  //        </p>
                  //        <div className={styles.container}>
                  //          <FormVerileri
                  //            progress={props.progress}
                  //            id={props.id}
                  //            label={props.label}
                  //            for={props.for}
                  //            type={props.type}
                  //            name={props.name}
                  //            value={props.value}
                  //          />
                  //        </div>
                  //      </div>
                  //    ) : (
                  //      <TextInput progress={props.progress} />
                  //    );
                  //  }