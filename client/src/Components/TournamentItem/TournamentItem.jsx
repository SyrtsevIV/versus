import styles from './tournamentItem.module.css';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTournament } from '../../redux/actionCreators/tournamentActionCreator';
import Bracket from '../Brackets/Bracket';
import { getBracket, makeBracket } from '../../redux/actionCreators/bracket';
import { getTournamentsList } from '../../redux/actionCreators/tournamentsListCreator';
import { registrationTournamnet } from '../../redux/actionCreators/tournamentActionCreator';

const TournamentItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const tourItem = useSelector((state) => state.tournamentItem.tourItem);
  const bracket = useSelector((state) => state.bracket.bracket);
  const [counter, setCounter] = useState(0);
  const userSession = useSelector((store) => store.authReducer.userSession);
  const buttons = useSelector((state) => state.tournamentsList.userInTour);
  const error = useSelector((state) => state.tournamentsList.error)

  useEffect(() => {
    dispatch(getTournament(id))
  }, [])

  useEffect(() => {
    dispatch(getTournamentsList())
  }, [counter])

  useEffect(() => {
    dispatch(getTournament(id));
  }, [counter, bracket]);

  const makeBracketHandler = async (id, tourId) => {
    dispatch(getBracket(id, tourId));
    dispatch(makeBracket(id, tourId));
  };



  return (
    <>
      <div className={styles.titleBlock}>
        {error ?
          <h1>{error}</h1>
          :
          <>
            <h1>Подробная информация</h1>
            <div className="card p-3 m-3 w-75">
              <div className="card-body d-flex align-items-center flex-column">
                <h5 className="card-title"><h1>{tourItem.title}</h1></h5>
                <p className="card-text">Описание: {tourItem.description}</p>
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-center">Место проведения: {tourItem.place}</li>
                <li className="list-group-item d-flex justify-content-center">Когда: {new Date(tourItem.date).toLocaleString('RU-ru')}</li>
                <li className="list-group-item d-flex justify-content-center">Организатор: {tourItem.creator?.login}</li>
              </ul>

              <div className="card-body">
                {tourItem.bracket?.length ?
                  <>
                    <Bracket tourId={tourItem?._id} creator={tourItem.creator?._id} tourStatus={tourItem.status} />
                  </>

                  :
                  <>
                    <div className="d-flex justify-content-between">
                      {buttons.includes(tourItem._id)
                        ?
                        <button className="btn btn-danger" onClick={async () => {
                          await dispatch(registrationTournamnet(tourItem._id))
                          setCounter(prev => prev + 1)
                        }}>Отписаться</button>

                        : userSession && userSession
                          ?
                          <button className="btn btn-success" onClick={async () => {
                            await dispatch(registrationTournamnet(tourItem._id))
                            setCounter(prev => prev + 1)
                          }}>Записаться</button>
                          :
                          <Link to={'/signup'}><button className="btn btn-success">Записаться</button></Link>
                      }

                      {userSession && userSession._id === tourItem?.creator?._id && tourItem.participants.length > 3

                        ?
                        <button className="btn btn-warning" onClick={() => {
                          makeBracketHandler(tourItem?._id, tourItem?._id)
                        }}>Завершить запись</button>
                        :
                        null
                      }
                    </div>
                    <div className="d-flex justify-content-center">
                      <ol className="list-group list-group-flush"> <h5><b>Список участников:</b></h5>
                        {tourItem?.participants?.map((user, i) =>
                          <li className="list-group-item rounded-pill" key={user._id}>{`${i + 1}. ${user.login}`}</li>
                        )}
                      </ol>
                    </div>
                  </>
                }
              </div>
            </div>
          </>
        }
      </div>
    </>
  )
};

export default TournamentItem;

