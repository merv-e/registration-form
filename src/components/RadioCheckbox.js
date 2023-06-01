import styles from "./UI/RadioCheckbox.module.css";

const RadioCheckbox = props => {

  return (
    <div className={styles["big-container"]}>
        <p>{props.name}</p>
        <div className={styles.container}>
      {
        props.values.map(q =>
        <>
          <div className={styles["inner-container"]}>
            <input key={q.id} id={q.id} type={q.type} name={q.name} value={q.value} />
            <label htmlFor={q.for}>{q.label}</label>
          </div>
      </>
      )
    }
      </div>
    </div>
  );
};

export default RadioCheckbox

