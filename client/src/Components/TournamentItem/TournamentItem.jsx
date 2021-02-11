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
        <h4>Турнир: {tourItem.title}</h4>
              <h5>Место проведения: {tourItem.place}</h5>
              <h5>Когда: {new Date(tourItem.date).toLocaleString('RU-ru')}</h5>
              <p>Организатор: {tourItem.creator?.login}</p>
              <p>Описание:</p>
              <p>{tourItem.description}</p>
              {tourItem.bracket?.length ? 
                <>
                <Bracket tourId={tourItem?._id} creator={tourItem.creator?._id} />
                  </>
                :
                <div className={styles.center}>
                  {
                    buttons.includes(tourItem._id)
                    ? <button className="waves-effect waves-light btn-small" onClick={async() => {
                      await dispatch(registrationTournamnet(tourItem._id))
                      await setCounter(prev => prev + 1)
                      }}>Отписаться</button>
                      
                      : userSession && userSession ?
                        <button className="waves-effect waves-light btn-small" onClick={async () => {
                        await dispatch(registrationTournamnet(tourItem._id))
                        await setCounter(prev => prev + 1)
                        }}>Записаться</button>
                        :
                        <Link to={'/signup'}><button className="waves-effect waves-light btn-small">Записаться</button></Link>

                  }
                 <p />
                  {userSession && userSession._id === tourItem?.creator?._id && tourItem.participants.length > 3 ?
                     <>
                    <div className={styles.center}>
                      <button className="waves-effect waves-light btn-small" onClick={ () => {
                         makeBracketHandler(tourItem?._id, tourItem?._id)
                      }}>Завершить запись</button>
                    <br />
                    </div>
                    </>
                    :
                    null
                  }
                    <ol> <h5><b>Список участников:</b></h5>
                      {tourItem.participants?.map(user =>
                        <li key={user._id}>{user.login}</li>
                    )}
                    </ol>
                </div>
              }
      </div>
    </>
  );
};

export default TournamentItem;

