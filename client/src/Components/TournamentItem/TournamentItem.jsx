import styles from './tournamentItem.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTournament } from '../../redux/actionCreators/tournamentActionCreator';
import Bracket from '../Brackets/Bracket';

const TournamentItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const tourItem = useSelector((state) => state.tournamentItem.tourItem);
  
  useEffect(() => {
    dispatch(getTournament(id))
  }, [])
  
  console.log(tourItem, 'tourItem!!!!!');
  return (
    <>
      <div className={styles.titleBlock}>
        <h1>{tourItem.title}</h1>
        <span>Место проведения: {tourItem.place}</span>
        <span>Организатор: {tourItem.creator?.login}</span>
        <div>
          <span>Описание: {tourItem.description}</span>
        </div>
      </div>
      
      <div>
        {tourItem?.status !== 'future' ? <Bracket /> : null }
      </div>

      <ul>
        {tourItem.participants && tourItem.participants.map((el) => (
          <li key={el._id}>{el.login}</li>
        ))}
      </ul>
    </>
  );
};

export default TournamentItem;

