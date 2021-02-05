import styles from '../Error/error.module.css'

const Error = () => {
  
  return (
    <div>
      <h1>404</h1>
      <div class={styles.wrapper}>
        <div class={styles.ping}></div>
        <div class={styles.ping}></div>
        <div class={styles.trailMask}></div>
      </div>
    </div>
  );
};

export default Error;
