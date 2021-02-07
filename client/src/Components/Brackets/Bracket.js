import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import EightTeamBracket from './EightTeamBracket/EightTeamBracket';
import FourTeamBracket from './FourTeamBracket/FourTeamBracket';
import SixteenTeamBracket from './SixteenTeamBracket/SixteenTeamBracket';
import ThirtytwoTeamBracket from './ThirtytwoTeamBracket/ThirtytwoTeamBracket';

const Bracket = () => {
  const [bracket, setBracket] = useState([]);
  const history = useHistory();

  const fetchBracket = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/602032e3c5f21b9d66fbcb96/bracket/new`
    );
    const resJson = await res.json();
    setBracket(resJson);
  };

  const makeBracketHandler = () => {
    fetchBracket();
  };

  const startMatchHandler = (id) => {
    history.push(`/tabletennis/match/${id}`);
  };

  const renderSwitch = () => {
    if (bracket) {
      if (bracket.semifinal?.length) {
        return <FourTeamBracket bracket={bracket} startMatchHandler={startMatchHandler} />;
      }
      if (bracket.quarterfinals?.length) {
        return <EightTeamBracket bracket={bracket} startMatchHandler={startMatchHandler} />;
      }
      if (bracket.oneEighth?.length) {
        return <SixteenTeamBracket bracket={bracket} startMatchHandler={startMatchHandler} />;
      }
      if (bracket.oneSixteenth?.length) {
        return <ThirtytwoTeamBracket bracket={bracket} startMatchHandler={startMatchHandler} />;
      }
    }
    return <button onClick={makeBracketHandler}>render bracket</button>;
  };

  return renderSwitch();
};

export default Bracket;
