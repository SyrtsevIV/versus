import styles from '../History/history.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserHistory } from '../../redux/actionCreators/profile';
import { useParams } from 'react-router-dom'

const History = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const matches = useSelector((state) => state.profileStats.history);

  useEffect(() => {
    dispatch(getUserHistory(id))
  }, [])
  console.log(matches);
  return (
    <div>
      <h1>Тут творится история</h1>
      <ul>
        {matches && matches.map((el) => (
          <li className={styles.match}>
            <span>Матч длился: {el.duration}</span>
            <span>{el.player1.login} {el.score.player1} : {el.score.player1} {el.player2.login}</span>
            <span>Стадия турнира: {el.tour} </span>
          </li>
        ))}
      </ul>
    </div>
  )  
};

export default History;
