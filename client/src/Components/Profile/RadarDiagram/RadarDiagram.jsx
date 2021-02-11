import styles from './radarDiagram.module.css';
import { Radar } from 'react-chartjs-2'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findUserStats } from '../../../redux/actionCreators/profile';

const Circular = () => {
  const [inputText, setInputText] = useState('');
  const [radarData, setRadarData] = useState({})
  const dispatch = useDispatch()
  const enemy = useSelector((state) => state.profileStats.compare)
  const user = useSelector((state) => state.profileStats);

  useEffect(()=> {
    radar()
  }, [user, enemy])
  
  // Радарная диаграма сравнения с соперниками
  const radar = () => {
    setRadarData({
      labels: ['Забито * 10', 'Победа', 'Пропущено * 10', 'Поражение'],
      datasets: [
        {
          label: 'Моя статистика',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(63, 224, 38, 0.9)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: 'rgba(179,181,198,0.2)',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [(user?.stats?.score / 10), user?.stats?.won, (user?.stats?.missed / 10), user?.stats?.lost]
        },
        {
          label: 'Противник',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255, 32, 38, 0.9)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [(enemy?.score / 10), enemy?.won, (enemy?.missed / 10), enemy?.lost]
        }
      ]
    })
  }

  // Получение текста из инпута и запись в редукс
  const textInput = ({ target }) => {
    setInputText(target.value)
  };
  const compareStats = (inputText) => {
    dispatch(findUserStats(inputText))
  }

  return (

    <div className={styles.radar}>
      <div className={styles.gameInfo}>
        <h5>Сравнить статистику</h5>
        <div className={styles.statsBlock}>
          <input type="text" placeholder="Введите логин" onChange={textInput}/>
          <button type="button" class="btn btn-primary" onClick={() => {compareStats(inputText)}}>Сравнить</button>
        </div>
      </div>
      <div className={styles.radarDiagram}>
        <Radar
          data={radarData}
          width={300}
          height={300}
        />
      </div>
    </div>
   
  )  
};

export default Circular;
