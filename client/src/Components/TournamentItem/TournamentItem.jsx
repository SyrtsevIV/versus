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
      <div className={styles.topBlock}>

        <div className={styles.titleBlock}>
          <h1>{tourItem.title}</h1>
          <span>Место проведения: {tourItem.place}</span>
          <span>Организатор: {tourItem.creator?.login}</span>
          <div>
            <span>Описание: {tourItem.description}</span>
          </div>
        </div>
      </div>
      
      <div>
        {tourItem?.bracket ? <Bracket tourCreatorId={tourItem.creator?._id} />
          : 
          <div className={styles.titleBlock}>
            <ol> <b>Список участников:</b>
              {tourItem.participants && tourItem.participants.map((user) => (
                <li key={user._id} className={styles.card}>{user.login}</li>
              ))}
            </ol>
          </div>
          }
      </div>
    </>
  );
};

export default TournamentItem;

