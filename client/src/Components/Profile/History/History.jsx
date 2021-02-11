import styles from './history.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserHistory } from '../../../redux/actionCreators/profile';
import { useParams } from 'react-router-dom'

const History = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const matches = useSelector((state) => state.profileStats.history);

  useEffect(() => {
    dispatch(getUserHistory(id))
  }, [])
  
  return (
    <div className={styles.history}>
      <h5>История игр:</h5>
      <ul>
        {matches && matches.map((el) => (
          <li className={styles.match}>
            <span>Матч длился: {el.duration}</span>
            <span>{el.player1.login} <span className={styles.score}>{el.score.player1}</span> : <span className={styles.score}>{el.score.player1}</span> {el.player2.login}</span>
            <span>Стадия турнира: {el.tour} </span>
          </li>
        ))}
      </ul>
    </div>
  )  
};

export default History;
