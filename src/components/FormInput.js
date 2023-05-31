import RadioCheckbox from "./RadioCheckbox";
import TextInput from "./TextInput";
import styles from "./UI/RadioCheckbox.module.css";

const FormInput = props => {

  const isRadioOrCheckbox = 
    props.type === "radio" || props.type === "checkbox";


  return (
    <li key={props.id}>
      
      <div className={isRadioOrCheckbox && styles["big-container"]}>
        <div className={isRadioOrCheckbox && styles.container}>
          <p>{props.type === "checkbox" && "Language"}</p>
          <p>{props.type === "radio" && "Gender"}</p>

          {isRadioOrCheckbox ? (
            <RadioCheckbox
              id={props.id}
              label={props.label}
              for={props.for}
              type={props.type}
              placeholder={props.placeholder}
              value={props.value}
            />
          ) : (
            <TextInput
              id={props.id}
              label={props.label}
              for={props.for}
              type={props.type}
              placeholder={props.placeholder}
              value={props.value}
            />
          )}
        </div>
      </div>
    </li>
  );
}

export default FormInput
            // value={name}
            // onChange={handleChange}


  // Radio --checkbox ---- 
          //   <div className="alignment-for-radio-and-checkboxes">
          //   <input
          //     // className="options-for-radio-checkbox"
          //     id={props.name}
          //     type={props.type}
          //     placeholder={props.placeholder}
          //     value={props.value && props.value}
          //   />
          //   <label htmlFor={props.for}>{props.label}</label>
          // </div>