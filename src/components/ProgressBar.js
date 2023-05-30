import styles from "./UI/ProgressBar.module.css";

const ProgressBar = props => {

  let currActive = 1;

  const isActive = props.progress === currActive; 

  console.log(isActive);

  console.log(`current active: ${currActive}`);
  console.log(typeof currActive);
  console.log(`progress:  ${props.progress}`);
  console.log(typeof props.progress);

  const progressNum = [1, 2, 3, 4];



  return (
    <div className={styles.container}>
      <div className={styles["progress-container"]}>
        {/*below,  when the second classname "&& styles["progress-width"]" is added, the progressbar becomes different and you see another line on the left side in the progress-bar. */}

        {/* The line in between */}
        <div className={styles.progress} id="progress"></div>

        {/* {progressNum.map((num) => (
          <div
            key={num}
            id={num}
            className={`${styles.circle} ${num} === ${props.progress} ? ${styles.active}
          `}
          >
            {num}
          </div>
        ))} */}

        <div className={styles.progress} id="progress"></div>
        <div className={`${styles.circle} active? ${styles.active}`}>1</div>
        <div className={`${styles.circle} active? ${styles.active}`}>2</div>
        <div className={`${styles.circle} active? ${styles.active}`}>3</div>
        <div className={`${styles.circle} active? ${styles.active}`}>4</div>
      </div>
    </div>
  );
}

export default ProgressBar

// classname "active" is going to change (will be removed in some divs and added in another)

// width of the line classNAme : progress will be changed when pressed next or prev.  in between 1/3 :)
