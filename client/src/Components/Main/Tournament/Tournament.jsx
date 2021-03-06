import styles from "../main.module.css";
import "../slider-animation.css";
import Slider from 'react-animated-slider';
import "../horizontal.css";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Bracket from '../../Brackets/Bracket';
import { getTournamentsList } from '../../../redux/actionCreators/tournamentsListCreator';
import { registrationTournamnet } from '../../../redux/actionCreators/tournamentActionCreator';
import getTours from '../../../redux/actionCreators/mainPageStatus/getTours/getTours';
import { getBracket, makeBracket } from '../../../redux/actionCreators/bracket';

export default function Activtournament() {
  const dispatch = useDispatch()
  const bracket = useSelector((state) => state.bracket.bracket);
  const tours = useSelector(state => state.mainPageTours.status);
  const userSession = useSelector((store) => store.authReducer.userSession);
  const buttons = useSelector((state) => state.tournamentsList.userInTour);
  const mainPage = useSelector(store => store.mainPage.status);
  const [counter, setCounter] = useState(0);

useEffect(() => {
    dispatch(getTournamentsList())
  }, [counter])
  
  useEffect(() => {
    dispatch(getTours(mainPage));
  }, [counter, bracket]);

  const makeBracketHandler = async (id, tourId) => {
    dispatch(getBracket(id, tourId));
    dispatch(makeBracket(id, tourId));
  };

  return (
    <div className={styles.center}>
      {tours ?
        <Slider>
          {tours.map(tour =>
            <div className={styles.center} key={tour._id}>
              <div className="card w-75 p-3 ">
                <div className="card-body d-flex align-items-center flex-column">
                  <h5 className="card-title"><h1>{tour.title}</h1></h5>
                  <p className="card-text">Описание: {tour.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-center">Место проведения: {tour.place}</li>
                  <li className="list-group-item d-flex justify-content-center">Когда: {new Date(tour.date).toLocaleString('RU-ru')}</li>
                  <li className="list-group-item d-flex justify-content-center">Организатор: {tour.creator?.login}</li>
                </ul>
                <div className="card-body">
                  {tour.bracket?.length ?
                    <>
                      <Bracket tourId={tour?._id} creator={tour.creator?._id} tourStatus={tour.status} />
                    </>
                    :
                    <>
                      <div className="d-flex justify-content-between">
                        {
                          buttons.includes(tour._id)
                            ? <button className="btn btn-danger" onClick={async () => {
                              await dispatch(registrationTournamnet(tour._id))
                              setCounter(prev => prev + 1)
                            }}>Отписаться</button>

                            : userSession && userSession ?
                              <button className="btn btn-success" onClick={async () => {
                                await dispatch(registrationTournamnet(tour._id))
                                setCounter(prev => prev + 1)
                              }}>Записаться</button>
                              :
                              <Link to={'/signup'}><button className="btn btn-success">Записаться</button></Link>

                        }
                        {userSession?._id === tour.creator._id && tour.participants.length > 3 ?
                          <>
                            <button className="btn btn-warning" onClick={() => {
                              makeBracketHandler(tour?._id, tour?._id)
                            }}>Завершить запись</button>
                          </>
                          :
                          null
                        }

                      </div>
                      <div className="d-flex justify-content-center">
                        <ol className="list-group list-group-flush"> <h5><b>Список участников:</b></h5>
                          {tour.participants.map((user, i) =>
                            <li className="list-group-item rounded-pill" key={user._id}>{`${i + 1}. ${user.login}`}</li>
                          )}
                        </ol>
                      </div>
                    </>
                  }
                </div>
              </div>

            </div>
          )}
        </Slider>
        :
        <h3>Турниров пока нет</h3>
      }
    </div>
  )
}
