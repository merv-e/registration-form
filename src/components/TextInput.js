
const TextInput = props => {
  return (
    <div className="alignment">
      <label htmlFor={props.for}>{props.label}</label>
      <input
        id={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
}

export default TextInput