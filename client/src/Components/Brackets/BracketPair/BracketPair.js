import style from '../bracket.module.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const BracketPair = ({ match, tourId, creator, tourStatus }) => {
  const userSession = useSelector((store) => store.authReducer.userSession);
  const history = useHistory();

  const startMatchHandler = (id) => {
    history.push(`/tabletennis/match/${id}/${tourId}`);
  };

  function matchHandler () {
   if (match?.player1 && match?.player2 && userSession?._id === creator && tourStatus !== 'past' && !match?.ended) {
     return () => startMatchHandler(match._id);
   } else {
     return null;
   }
  }

  return (
    <div
      onClick={matchHandler()}
    >
      <div className={`${style['playoff-table-left-player']} ${style['flex-row-sb']}`}>
        <span>{match.player1?.login ? match.player1?.login : match?.phantom}</span>
        <span>{match.player1?.login ? match.score.player1 : null}</span>
      </div>
      <div className={`${style['playoff-table-right-player']} ${style['flex-row-sb']}`}>
        <span>{match.player2 ? match.player2.login : match.phantom}</span>
        <span>{match.player2?.login ? match.score.player2 : null}</span>
      </div>
    </div>
  );
};

export default BracketPair;
