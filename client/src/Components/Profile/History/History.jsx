import styles from './history.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserHistory } from '../../../redux/actionCreators/profile';
import { useParams } from 'react-router-dom'

const History = () => {
  const {userId} = useParams()
  const dispatch = useDispatch()
  const matches = useSelector((state) => state.profileStats.history);

  useEffect(() => {
    dispatch(getUserHistory(userId))
  }, [])
  

  return (
    <div className={styles.history}>
      <h5>История игр:</h5>
      
      {matches?.length > 0 ? 
      
      <ul className={styles.listBlock}>
      {matches && matches.map((el) => (
        <li className={styles.list}>
          <div class="card text-center">
        <div class="card-header">
          Длительность матча: {el.duration}
        </div>
        <div class="card-body">
          <h5 class="card-title">
            <span>{el.player1?.login}
            <span className={styles.score}>{el.score?.player1}</span> : <span className={styles.score}>{el.score?.player2}</span> {el.player2?.login}</span></h5>
        </div>
        <div class="card-footer text-muted">
          Стадия турнира: {el.tour}
        </div>
      </div>
        </li>
      ))}
    </ul> : <p>Участвуй в турнирах и увидишь здесь историю своих матчей!</p>
    
      }
    </div>
  )  
};

export default History;
