import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Match = () => {
  const { id } = useParams();
  const [matchData, setMatchData] = useState([]);

  const fetchMatch = async () => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/match/${id}`);
    const resJson = await res.json();
    await setMatchData(resJson.match);
  };

  useEffect(() => {
    fetchMatch();
  }, []);

  return (
    <div>
      <span>{matchData.player1?.login} vs </span>
      <span>{matchData.player2?.login}</span>
    </div>
  );
};

export default Match;
