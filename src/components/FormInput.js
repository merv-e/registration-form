import VerifyIfRadioCheckbox from "./VerifyIfRadioCheckbox";
import TextInput from "./TextInput";

const FormInput = props => {
  return (
    <div key={props.id}>
      {props.progress === 2 ? (
        <VerifyIfRadioCheckbox
          progress={props.progress}
        />
      ) : (
        <TextInput
          progress={props.progress}
        />
      )}
    </div>
  );
}

export default FormInput


