import styles from './rank.module.css';
import { useSelector } from 'react-redux';

const Rank = () => {
  const user = useSelector((state) => state.profileStats);
  
  
  return (
    <div className={styles.rankBlock}>
      <div>
        <h4>MMR: {user?.stats?.mmr}</h4>
        <h5>Позиция в общем рейтинге: {user?.rating} из {user?.allPlayerValue}</h5>
      </div>
    </div>  
  )  
};

export default Rank;
