import styles from '../Error/error.module.css'

const Error = () => {
  return (
    <div>
      <h5>ДАННАЯ СТРАНИЦА УДАЛЕНА, ЛИБО НИКОГДА НЕ СУЩЕСТВОВАЛА</h5>
      <div className={styles.wrapper}>
        <div className={styles.ping}></div>
        <div className={styles.ping}></div>
        <div className={styles.trailMask}></div>
      </div>
    </div>
  );
};

export default Error;
