import { useSelector } from 'react-redux';
import styles from '../Cup/cup.module.css'

const Cup = () => {
  const user = useSelector((state) => state.profileStats);

  return (
    <div className={styles.cupBlock}>
      <div className={styles.cupInfo}>
        <p>№2</p>
        <span className={styles.icon2}>&#127942;</span>
        <p>{user?.stats?.gold}</p>
      </div>
      <div className={styles.cupInfo}>
        <p>№1</p>
        <span className={styles.icon1}>&#127942;</span>
        <p>{user?.stats?.silver}</p>
      </div>
      <div className={styles.cupInfo}>
        <p>№3</p>
        <span className={styles.icon3}>&#127942;</span>
        <p>{user?.stats?.bronze}</p>
      </div>
    </div>
  );
};

export default Cup;
