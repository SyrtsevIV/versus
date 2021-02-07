/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./main.module.css";
import Activtournament from './Activ/Activtournament';
import Futuretournament from './Future/Futuretournament';
import Pasttournament from './Past/Pasttournament';
import setMainPage from '../../redux/actionCreators/mainPageStatus/mainPageAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getTours from '../../redux/actionCreators/mainPageStatus/getTours/getTours';

const Main = () => {
  const dispatch = useDispatch();
  const mainPage = useSelector(store => store.mainPage);
  
  useEffect(() => {
    dispatch(setMainPage('activ'));
  }, [])

  useEffect(() => {
    dispatch(getTours(mainPage));
  }, [mainPage])

  const changeHandler = (status) => {
    dispatch(setMainPage(status));
  }

  return (
    <div>
      <h1>Main page</h1>
      <div className={styles.mainNav}>
        <li onClick={() => changeHandler('past')} className="waves-effect waves-light btn-large">Прошедшие турниры</li>
        <li onClick={() => changeHandler('activ')} className="waves-effect waves-light btn-large">Текущие турниры</li>
        <li onClick={() => changeHandler('future')} className="waves-effect waves-light btn-large">Будущие турниры</li>
      </div>
      {mainPage === 'activ' && <Activtournament />}
      {mainPage === 'future' && <Futuretournament />}
      {mainPage === 'past' && <Pasttournament />}

    </div>
    );
};

export default Main;
