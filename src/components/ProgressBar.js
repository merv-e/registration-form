import styles from "./UI/ProgressBar.module.css";

const ProgressBar = props => {

  console.log(props.update);

  return (
    <div className={styles.container}>
      <div className={styles["progress-container"]}>
        <div className={styles.progress} id="progress"></div>
        <div className={`${styles.circle} active? ${styles.active}`}>1</div>
        <div className={styles.circle}>2</div>
        <div className={styles.circle}>3</div>
        <div className={styles.circle}>4</div>
      </div>
    </div>
  );
}

export default ProgressBar