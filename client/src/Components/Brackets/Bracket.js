import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { wsClient } from '../../App';
import EightTeamBracket from './EightTeamBracket/EightTeamBracket';
import FourTeamBracket from './FourTeamBracket/FourTeamBracket';
import SixteenTeamBracket from './SixteenTeamBracket/SixteenTeamBracket';
import ThirtytwoTeamBracket from './ThirtytwoTeamBracket/ThirtytwoTeamBracket';
import styles from './bracket.module.css';

const Bracket = ({ tourId, creator, tourStatus }) => {
  const [bracket, setBracket] = useState();
  const { id } = useParams();
  wsClient.onmessage = (message) => {
    setBracket(JSON.parse(message.data).bracket);
  };

  useEffect(() => {
    const bracketFetch = async () => {
      const req = await fetch(`${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/${id || tourId}`);
      const resJson = await req.json();
      setBracket(resJson.bracket);
    };
    bracketFetch();
  }, []);

  const renderSwitch = () => {
    if (bracket) {
      if (bracket.oneSixteenth?.length) {
        return (
          <ThirtytwoTeamBracket bracket={bracket} tourId={tourId} creator={creator} tourStatus={tourStatus} />
        );
      }
      if (bracket.oneEighth?.length) {
        return (
          <SixteenTeamBracket bracket={bracket} tourId={tourId} creator={creator} tourStatus={tourStatus} />
        );
      }
      if (bracket.quarterfinals?.length) {
        return (
          <EightTeamBracket bracket={bracket} tourId={tourId} creator={creator} tourStatus={tourStatus} />
        );
      }
      if (bracket.semifinal?.length) {
        return (
          <FourTeamBracket bracket={bracket} tourId={tourId} creator={creator} tourStatus={tourStatus} />
        );
      }
    }
    return null;
  };

  return (
    <>
      <div className={styles.center}>{renderSwitch()}</div>
    </>
  );
};

export default Bracket;
