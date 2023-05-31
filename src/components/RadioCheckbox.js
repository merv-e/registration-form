import styles from "./UI/RadioCheckbox.module.css";

const RadioCheckbox = props => {
  console.log(props);

  return (
    <div className={styles.container2}>
      <div>
      {/* Burada questions'daki verileri render etsin istiyoruz. */}
        <input 
          id={props.id}  
          type={props.type} 
          value={props.value} 
          />
        <label 
         htmlFor={props.for} 
        >{props.label}
        </label>
      </div>
    </div>

  );
}

export default RadioCheckbox

