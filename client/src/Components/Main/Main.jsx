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
        <div className="btn-group p-2" role="group" aria-label="Basic outlined example">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"  />
          <label onClick={() => changeHandler('past')} className="btn btn-outline-primary" for="btnradio1">Прошедшие турниры</label>

          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
          <label onClick={() => changeHandler('current')} className="btn btn-outline-primary" for="btnradio2">Текущие турниры</label>

          <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
          <label onClick={() => changeHandler('future')} className="btn btn-outline-primary" for="btnradio3">Будущие турниры</label>
        </div>
      </div>
        <Activtournament />
    </div>
    );
};

export default Main;
