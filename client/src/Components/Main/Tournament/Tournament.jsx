import styles from "../main.module.css";
import "../slider-animation.css";
import Slider from 'react-animated-slider';
import "react-animated-slider/build/horizontal.css";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Bracket from '../../Brackets/Bracket';
import { getTournamentsList } from '../../../redux/actionCreators/tournamentsListCreator';
import { registrationTournamnet } from '../../../redux/actionCreators/tournamentActionCreator';
import getTours from '../../../redux/actionCreators/mainPageStatus/getTours/getTours';

export default function Activtournament() {
  const dispatch = useDispatch()
  const tours = useSelector(state => state.mainPageTours);
  const userSession = useSelector((store) => store.authReducer.userSession);
  const buttons = useSelector((state) => state.tournamentsList.userInTour);
  const [counter, setCounter] = useState(0);
  const mainPage = useSelector(store => store.mainPage);

  useEffect(() => {
    dispatch(getTournamentsList())
  }, [counter])

  useEffect(() => {
    dispatch(getTours(mainPage));
  }, [counter])

  return (
    <div className={styles.center}>
      {tours.length ?
      <Slider>
          {tours.map(tour =>
            <div className={styles.center} key={tour._id}>

              <h4>Название: {tour.title}</h4>
              <h5>Где: {tour.place}</h5>
              <h5>Когда: {new Date(tour.date).toLocaleString('RU-ru')}</h5>
              {tour.bracket ? 
                <Bracket tourId={tour?._id} />
                :
                <div className={styles.center}>
                  {
                    buttons.includes(tour._id)
                    ? <button className="waves-effect waves-light btn-small" onClick={async() => {
                      await dispatch(registrationTournamnet(tour._id))
                      await setCounter(prev => prev + 1)
                    }}>Отписаться</button>
                    : <button className="waves-effect waves-light btn-small" onClick={async() => {
                      await dispatch(registrationTournamnet(tour._id))
                      await setCounter(prev => prev + 1)
                    }}>Записаться</button>
                  }
                 <hr />
                  {userSession?._id === tour.creator &&
                    <button className="waves-effect waves-light btn-small">Завершить запись</button>
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
