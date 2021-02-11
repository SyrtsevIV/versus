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
  const tours = useSelector(state => state.mainPageTours);
  const userSession = useSelector((store) => store.authReducer.userSession);
  const buttons = useSelector((state) => state.tournamentsList.userInTour);
  const [counter, setCounter] = useState(0);
  const mainPage = useSelector(store => store.mainPage);
  const bracket = useSelector((state) => state.bracket.bracket);

  useEffect(() => {
    dispatch(getTournamentsList())
  }, [counter])

  useEffect(() => {
    dispatch(getTours(mainPage));
  }, [counter,bracket]);

  const makeBracketHandler = async (id, tourId) => {
   dispatch(getBracket(id, tourId));
   dispatch(makeBracket(id, tourId));
  };

  return (
    <div className={styles.center}>
      {tours.length ?
      <Slider>
          {tours.map(tour =>
            <div className={styles.center} key={tour._id}>

              <h4>Турнир: {tour.title}</h4>
              <h5>Место проведения: {tour.place}</h5>
              <h5>Когда: {new Date(tour.date).toLocaleString('RU-ru')}</h5>
              <p>Организатор: {tour.creator?.login}</p>
              <p>Описание:</p>
              <p>{tour.description}</p>
              {tour.bracket?.length ? 
                <>
                <Bracket tourId={tour?._id} />
                  </>
                :
                <div className={styles.center}>
                  {
                    buttons.includes(tour._id)
                    ? <button className="waves-effect waves-light btn-small" onClick={async() => {
                      await dispatch(registrationTournamnet(tour._id))
                      await setCounter(prev => prev + 1)
                      }}>Отписаться</button>
                      
                      : userSession && userSession ?
                        <button className="waves-effect waves-light btn-small" onClick={async () => {
                        await dispatch(registrationTournamnet(tour._id))
                        await setCounter(prev => prev + 1)
                        }}>Записаться</button>
                        :
                        <Link to={'/signup'}><button className="waves-effect waves-light btn-small">Записаться</button></Link>

                  }
                 <p />
                  {userSession?._id === tour.creator._id && tour.participants.length > 3 ?
                     <>
                    <div className={styles.center}>
                      <button className="waves-effect waves-light btn-small" onClick={ () => {
                         makeBracketHandler(tour?._id, tour?._id)
                      }}>Завершить запись</button>
                    <p />
                    </div>
                    </>
                    :
                    null
                  }
                    <ol> <h5><b>Список участников:</b></h5>
                      {tour.participants.map(user =>
                        <li key={user._id}>{user.login}</li>
                    )}
                    </ol>

        </div>
      }
          </div>
        )}
        </Slider>
        :
        <h3>Турниров пока нет</h3>
  }
    </div>
    )
}
