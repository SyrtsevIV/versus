import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { wsClient } from '../../App';
import EightTeamBracket from './EightTeamBracket/EightTeamBracket';
import FourTeamBracket from './FourTeamBracket/FourTeamBracket';
import SixteenTeamBracket from './SixteenTeamBracket/SixteenTeamBracket';
import ThirtytwoTeamBracket from './ThirtytwoTeamBracket/ThirtytwoTeamBracket';
import styles from './bracket.module.css';
import { useSelector } from 'react-redux';
import { getBracket, wsSetBracket } from '../../redux/actionCreators/bracket';
import { useDispatch } from 'react-redux';

const Bracket = ({ tourId }) => {
  // const [bracket, setBracket] = useState([]);
  const bracket = useSelector((state) => state.bracket.bracket);
  const dispatch = useDispatch();
  const { id } = useParams();
  wsClient.onmessage = (message) => {
    // setBracket(JSON.parse(message.data).bracket);
    dispatch(wsSetBracket(JSON.parse(message.data).bracket));
  };

  useEffect(() => {
    // fetch(`${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/${id || tourId}`)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     return setBracket(json?.bracket);
    //   });
    dispatch(getBracket(id, tourId));
  }, []);

  // const fetchBracket = async () => {
  // const res = await fetch(
  //   `${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/${id || tourId}/bracket/new`
  // );
  // const resJson = await res.json();
  // setBracket(resJson);
  // };

  const renderSwitch = () => {
    if (bracket) {
      if (bracket.oneSixteenth?.length) {
        return <ThirtytwoTeamBracket bracket={bracket} tourId={tourId} />;
      }
      if (bracket.oneEighth?.length) {
        return <SixteenTeamBracket bracket={bracket} tourId={tourId} />;
      }
      if (bracket.quarterfinals?.length) {
        return <EightTeamBracket bracket={bracket} tourId={tourId} />;
      }
      if (bracket.semifinal?.length) {
        return <FourTeamBracket bracket={bracket} tourId={tourId} />;
      }
    }
    return null;
  };

  return (
    <>
      <div className={styles.center}>
        {renderSwitch()}
      </div>
    </>
  );
};

export default Bracket;
