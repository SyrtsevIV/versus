/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./main.module.css";
import Activtournament from './Tournament/Tournament';
import setMainPage from '../../redux/actionCreators/mainPageStatus/mainPageAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getTours from '../../redux/actionCreators/mainPageStatus/getTours/getTours';

const Main = () => {
  const dispatch = useDispatch();
  const mainPage = useSelector(store => store.mainPage);
  
  useEffect(() => {
    dispatch(setMainPage('current'));
  }, [])

  useEffect(() => {
    dispatch(getTours(mainPage));
  }, [mainPage])

  const changeHandler = (status) => {
    dispatch(setMainPage(status));
  }

  return (
    <div>
      <div className={styles.mainNav}>
        <li onClick={() => changeHandler('past')} className="waves-effect waves-light btn-large">Прошедшие турниры</li>
        <li onClick={() => changeHandler('current')} className="waves-effect waves-light btn-large">Текущие турниры</li>
        <li onClick={() => changeHandler('future')} className="waves-effect waves-light btn-large">Будущие турниры</li>
      </div>
        <Activtournament />
    </div>
    );
};

export default Main;
