import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { wsClient } from '../../App';
import EightTeamBracket from './EightTeamBracket/EightTeamBracket';
import FourTeamBracket from './FourTeamBracket/FourTeamBracket';
import SixteenTeamBracket from './SixteenTeamBracket/SixteenTeamBracket';
import ThirtytwoTeamBracket from './ThirtytwoTeamBracket/ThirtytwoTeamBracket';
import styles from './bracket.module.css';
import { useSelector } from 'react-redux';
import { getBracket, makeBracket, wsSetBracket } from '../../redux/actionCreators/bracket';
import { useDispatch } from 'react-redux';

const Bracket = ({ tourId }) => {
  const bracket = useSelector((state) => state.bracket.bracket);
  const dispatch = useDispatch();
  const { id } = useParams();
  wsClient.onmessage = (message) => {
    dispatch(wsSetBracket(JSON.parse(message.data).bracket));
  };

  useEffect(() => {
    dispatch(getBracket(id, tourId));
  }, []);

  const makeBracketHandler = () => {
    dispatch(makeBracket(id, tourId));
  };

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
        <button onClick={makeBracketHandler}>Завершить запись</button> {renderSwitch()}
      </div>
    </>
  );
};

export default Bracket;
