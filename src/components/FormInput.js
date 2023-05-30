
const FormInput = props => {
  return (
    <li 
     key={props.id}
     className="gap">
     {
        (props.for === "female") && <p>Gender</p>
     }
      <label htmlFor={props.for}>{props.label}</label>
      <input
        id={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value && props.value }
        // value={name}
        // onChange={handleChange}

      />
    </li>
  );
}

export default FormInput