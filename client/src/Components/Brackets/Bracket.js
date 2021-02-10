import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import EightTeamBracket from './EightTeamBracket/EightTeamBracket';
import FourTeamBracket from './FourTeamBracket/FourTeamBracket';
import SixteenTeamBracket from './SixteenTeamBracket/SixteenTeamBracket';
import ThirtytwoTeamBracket from './ThirtytwoTeamBracket/ThirtytwoTeamBracket';

const Bracket = () => {
  const [bracket, setBracket] = useState([]);
  const hardckoredTournamentId = '6023899d8116e350cd9b2de8';

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/${hardckoredTournamentId}`)
      .then((res) => res.json())
      .then((json) => {
        return setBracket(json?.bracket);
      });
  }, []);

  const fetchBracket = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/${hardckoredTournamentId}/bracket/new`
    );
    const resJson = await res.json();
    setBracket(resJson);
  };

  const makeBracketHandler = () => {
    fetchBracket();
  };

  const renderSwitch = () => {
    if (bracket) {
      if (bracket.oneSixteenth?.length) {
        return <ThirtytwoTeamBracket bracket={bracket} />;
      }
      if (bracket.oneEighth?.length) {
        return <SixteenTeamBracket bracket={bracket} />;
      }
      if (bracket.quarterfinals?.length) {
        return <EightTeamBracket bracket={bracket} />;
      }
      if (bracket.semifinal?.length) {
        return <FourTeamBracket bracket={bracket} />;
      }
    }
    return '...';
  };

  return (
    <>
      <button onClick={makeBracketHandler}>render bracket</button> {renderSwitch()}
    </>
  );
};

export default Bracket;
