import { useSelector } from 'react-redux';
import styles from '../Cup/cup.module.css'

const Cup = () => {
  const user = useSelector((state) => state.profileStats);

  return (
    <div className={styles.cupBlock}>
      <div className={styles.cupInfo}>
        <img src="http://pngimg.com/uploads/golden_cup/golden_cup_PNG94635.png" className={user?.stats?.silver > 0 ? styles.icon2 : `${styles.nonactive} ${styles.icon2}` } alt=""/>
        <p>{user?.stats?.gold}</p>
      </div>
      <div className={styles.cupInfo}>
        <img src="http://pngimg.com/uploads/golden_cup/golden_cup_PNG14567.png" className={user?.stats?.gold > 0 ? styles.icon1 : `${styles.nonactive} ${styles.icon1}` } alt=""/>
        <p>{user?.stats?.silver}</p>
      </div>
      <div className={styles.cupInfo}>
        <img src="http://pngimg.com/uploads/golden_cup/golden_cup_PNG94582.png" className={user?.stats?.bronze > 0 ? styles.icon3 : `${styles.nonactive} ${styles.icon3}` } alt=""/>
        <p>{user?.stats?.bronze}</p>
      </div>
    </div>
  );
};

export default Cup;
