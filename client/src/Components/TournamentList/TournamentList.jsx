import styles from './tournamentList.module.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTournamentsList } from '../../redux/actionCreators/tournamentsListCreator';
import { Link } from 'react-router-dom';
import { registrationTournamnet } from '../../redux/actionCreators/tournamentActionCreator';

const TournamentList = () => {
  const dispatch = useDispatch()
  const tourList = useSelector((state) => state.tournamentsList.tourList);
  
  useEffect(() => {
    dispatch(getTournamentsList())
  }, [])
  
 

  return (
    <div className={styles.TournamentList}>
      
      <div>
        <h4 className={styles.blockTitle}>Прошедшие турниры</h4>
        <ul>
          {tourList && tourList.past.map((el) =>(
            <li key={el._id} className={styles.listItem}>
              <span className={styles.title}>Название: {el.title}</span>
              <span>Дата: {new Date(el.date).toLocaleString('RU-ru')}</span>
              <span>Описание: {el.description}</span>
              <span>Местро проведения: {el.place}</span>
              <span>Организатор: {el.creator?.login}</span>

              
              <div className={styles.action}>
                <Link to={`/tournament/${el._id}`}><button>Подробнее</button></Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className={styles.blockTitle}>Текущие турниры</h4>
        <ul>
        {tourList && tourList.current.map((el) =>(
            <li key={el._id} className={styles.listItem}>
            <span className={styles.title}>Название: {el.title}</span>
            <span>Дата: {new Date(el.date).toLocaleString('RU-ru')}</span>
            <span>Описание: {el.description}</span>
            <span>Местро проведения: {el.place}</span>
            <span>Организатор: {el.creator?.login}</span>
            <div className={styles.action}>
              <Link to={`/tournament/${el._id}`}><button>Подробнее</button></Link>
            </div>
          </li>
          ))}
        </ul>
      </div>

      <div>
      <h4 className={styles.blockTitle}>Будущие турниры</h4>
        <ul>
        {tourList && tourList.future.map((el) =>(
           <li key={el._id} className={styles.listItem}>
           <span className={styles.title}>Название: {el.title}</span>
           <span>Дата: {new Date(el.date).toLocaleString('RU-ru')}</span>
           <span>Описание: {el.description}</span>
           <span>Местро проведения: {el.place}</span>
           <span>Организатор: {el.creator?.login}</span>
           <div className={styles.action}>
              <Link to={`/tournament/${el._id}`}><button>Подробнее</button></Link>
              <button onClick={() => dispatch(registrationTournamnet(el._id))}>Регистрация</button>
            </div>
         </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TournamentList;
