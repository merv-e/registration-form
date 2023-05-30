import styles from "./UI/ProgressBar.module.css";

const ProgressBar = props => {

  const progressNo = [1, 2, 3, 4];

  // BELOW: depending on the click event(whether it's prev or next), variable "progress" is going to be updated, and so is the activeProgress variable, and then the percentage of the progress will be calculated.)
  const activeProgress = props.progress - 1;
  const calculateProgress = (activeProgress / 3) * 100;

  return (
    <div className={styles.container}>
      <div className={styles["progress-container"]}>
        {/* The line in between */}
        <div
          className={styles.progress}
          style={{ width: calculateProgress + "%" }}
          id="progress"
        ></div>

        {progressNo.map((num) => (
          <div
            key={num}
            id={num}
            className={styles.circle}
            style={{
              borderColor:
                props.progress >= num && "rgb(100, 151, 177)" 
            }}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressBar

        