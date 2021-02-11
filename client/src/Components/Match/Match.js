import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import style from './match.module.css';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getMatchData, plusPoint, minusPoint, endMatch } from '../../redux/actionCreators/match';
import { wsClient } from '../../App';
import { getTournament } from '../../redux/actionCreators/tournamentActionCreator';

const Match = () => {
  const { id, tourId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [timer, setTimer] = useState(0);

  const matchData = useSelector((state) => state.match.match);
  const tournamentData = useSelector((state) => state.tournamentItem.tourItem);

  useEffect(() => {
    dispatch(getMatchData(id));
    dispatch(getTournament(tourId));
  }, []);

  const onTimerUpdate = ({ time, duration }) => {
    setTimer(time);
  };

  const endMatchHandler = () => {
    wsClient.send(JSON.stringify({ id, timer, tournamentId: tourId }));
    history.goBack();
  };

  const plusPointHandler = (id, playerName) => {
    dispatch(plusPoint(id, playerName));
    wsClient.send(JSON.stringify({ id, playerName, plus: true, tournamentId: tourId }));
  };

  const minusPointHandler = (id, playerName) => {
    dispatch(minusPoint(id, playerName));
    wsClient.send(JSON.stringify({ id, playerName, minus: true, tournamentId: tourId }));
  };

  return (
    <div className={style.container}>
      <div className={style.match}>
        <div className={style.header}>
          <h2>Турнир: "{tournamentData?.title}"</h2>
          <p>Дата проведения: {new Date(tournamentData.date).toLocaleDateString('RU-ru')}</p>
          <Timer active duration={null} onTimeUpdate={onTimerUpdate}>
            <Timecode className={style.timer} />
          </Timer>
        </div>
        <div className={style.versus}>
          <div className={style.player}>
            <h4>{matchData?.player1?.login}</h4>
            <p>MMR: {Math.round(matchData?.player1.stats.mmr)}</p>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => minusPointHandler(matchData?._id, 'player1')}
              >
                -
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => plusPointHandler(matchData?._id, 'player1')}
              >
                +
              </button>
            </div>
          </div>
          <div className={style.player}>
            <h4>vs</h4>
            <h4>
              {matchData?.score?.player1} : {matchData?.score?.player2}
            </h4>
          </div>
          <div className={style.player}>
            <h4>{matchData?.player2?.login}</h4>
            <p>MMR: {Math.round(matchData?.player2.stats.mmr)}</p>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => minusPointHandler(matchData?._id, 'player2')}
              >
                -
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => plusPointHandler(matchData?._id, 'player2')}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-danger" onClick={() => endMatchHandler()}>
          Завершить матч
        </button>
        {/* <button onClick={() => endMatchHandler()}>Завершить матч</button> */}
      </div>
    </div>
  );
};

export default Match;
