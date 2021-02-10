import styles from './tournamentList.module.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTournamentsList } from '../../redux/actionCreators/tournamentsListCreator';
import { Link } from 'react-router-dom';
import { registrationTournamnet } from '../../redux/actionCreators/tournamentActionCreator';

const TournamentList = () => {
  const dispatch = useDispatch()
  const tourList = useSelector((state) => state.tournamentsList.tourList);
  const buttons = useSelector((state) => state.tournamentsList.userInTour);
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    dispatch(getTournamentsList())
  }, [counter])

  return (
    <div className={styles.TournamentList}>

      <div>
        <h4 className={styles.blockTitle}>Прошедшие турниры</h4>
        <ul>
          {tourList && tourList.past.map((el) => (
            <li key={el._id} className={styles.listItem}>
              <span className={styles.title}>Название: {el.title}</span>
              <span>Дата:{new Date(el.date).toLocaleString('RU-ru')}</span>
              <span>Описание: {el.description}</span>
              <span>Местро проведения: {el.place}</span>
              <span>Количество участников: {el.participants.length}</span>
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
          {tourList && tourList.current.map((el) => (
            <li key={el._id} className={styles.listItem}>
              <span className={styles.title}>Название: {el.title}</span>
              <span>Дата: {new Date(el.date).toLocaleString('RU-ru')}</span>
              <span>Описание: {el.description}</span>
              <span>Местро проведения: {el.place}</span>
              <span>Количество участников: {el.participants.length}</span>
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
          {tourList && tourList.future.map((el) => (
            <li key={el._id} className={styles.listItem}>
              <span className={styles.title}>Название: {el.title}</span>
              <span>Дата: {new Date(el.date).toLocaleString('RU-ru')}</span>
              <span>Описание: {el.description}</span>
              <span>Местро проведения: {el.place}</span>
              <span>Количество участников: {el.participants.length}</span>
              <span>Организатор: {el.creator?.login}</span>
              <div className={styles.action}>
                <Link to={`/tournament/${el._id}`}><button>Подробнее</button></Link>
                {
                  buttons.includes(el._id)
                    ? <button onClick={() => {
                      setCounter(prev => prev + 1)
                      dispatch(registrationTournamnet(el._id))
                    }}>Отписаться</button>
                    : <button onClick={() => {
                      setCounter(prev => prev + 1)
                      dispatch(registrationTournamnet(el._id))
                    }}>Записаться</button>
                }
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TournamentList;
