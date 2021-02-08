import styles from './tournamentItem.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getTournamentsList } from '../../redux/actionCreators/tournamentActionCreator';
import { getTournamentsList } from '../../redux/actionCreators/tournamentsListCreator';

const TournamentItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const tourList = useSelector((state) => state.tournamentsList.tourList);
  
  useEffect(() => {
    dispatch(getTournamentsList())
  }, [])
  
  return (
    <h1>HELLO FROM ITEM</h1>
  );
};

export default TournamentItem;

