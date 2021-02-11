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
  const userSession = useSelector((store) => store.authReducer.userSession);
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

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Название турнира: {el.title}</h5>
                  <p className="card-text">{el.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Дата:{new Date(el.date).toLocaleString('RU-ru')}</li>
                  <li className="list-group-item">Местро проведения: {el.place}</li>
                  <li className="list-group-item">Количество участников: {el.participants.length}</li>
                  <li className="list-group-item">Организатор: {el.creator?.login}</li>
                </ul>
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

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Название турнира: {el.title}</h5>
                  <p className="card-text">{el.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Дата:{new Date(el.date).toLocaleString('RU-ru')}</li>
                  <li className="list-group-item">Местро проведения: {el.place}</li>
                  <li className="list-group-item">Количество участников: {el.participants.length}</li>
                  <li className="list-group-item">Организатор: {el.creator?.login}</li>
                </ul>
                <div className="card-body">
                  <Link to={`/tournament/${el._id}`}><button type="button" class="btn btn-primary">Подробнее</button></Link>
                </div>
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

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Название турнира: {el.title}</h5>
                  <p className="card-text">{el.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Дата:{new Date(el.date).toLocaleString('RU-ru')}</li>
                  <li className="list-group-item">Местро проведения: {el.place}</li>
                  <li className="list-group-item">Количество участников: {el.participants.length}</li>
                  <li className="list-group-item">Организатор: {el.creator?.login}</li>
                </ul>
                <div className="card-body">
                
                  <div className={styles.buttonsBlock}>
                  <Link to={`/tournament/${el._id}`}><button type="button" class="btn btn-primary">Подробнее</button></Link>
                    {
                      buttons.includes(el._id)
                        ?
                        <button type="button" class="btn btn-danger" onClick={async () => {
                          await dispatch(registrationTournamnet(el._id))
                          setCounter(prev => prev + 1)
                        }}>Отписаться</button>
                        : userSession && userSession ?
                          <button type="button" class="btn btn-success" onClick={async () => {
                            await dispatch(registrationTournamnet(el._id))
                            setCounter(prev => prev + 1)
                          }}>Записаться</button>
                          :
                          <Link to={'/signup'}><button type="button" class="btn btn-success">Записаться</button></Link>
                    }
                    </div>
                  </div>
                </div>

          
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TournamentList;
