import styles from "./UI/RadioCheckbox.module.css";

const RadioCheckbox = props => {
  
  return (
    <div className={styles["big-container"]}>
      <p>{props.qname}</p>
      <ul className={styles.container}>
        {props.values.map((q) => (
            <li key={q.id} className={styles["inner-container"]}>
              <input id={q.id} type={q.type} name={q.name} value={q.value} />
              <label htmlFor={q.for}>{q.label}</label>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioCheckbox

