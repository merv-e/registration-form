import styles from "./UI/RadioCheckbox.module.css";

const RadioCheckbox = props => {
  // console.log(props);

  return (
    
    <div className={styles["inner-container"]}>
      <input id={props.id} type={props.type} name={props.name} value={props.value} />
      <label htmlFor={props.for}>{props.label}</label>
    </div>
  );
}

export default RadioCheckbox

