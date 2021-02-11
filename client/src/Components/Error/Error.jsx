import styles from '../Error/error.module.css'

const Error = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.ping}></div>
        <div className={styles.ping}></div>
        <div className={styles.trailMask}></div>
      </div>
    </div>
  );
};

export default Error;
