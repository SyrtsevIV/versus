import styles from './circular.module.css';
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Circular = () => {
  const user = useSelector((state) => state.profileStats);
  const [chartData, setChartData] = useState({})

  const won = user?.stats?.won
  const lost = user?.stats?.lost
  
  const gameValue = won + lost || 0
  const percent = Number(((won / (won + lost)) * 100).toFixed(2)) || 0




  useEffect(()=> {
    chart()
  }, [user, percent])

  const chart = () => {
    setChartData({
      labels: ['Победа', 'Поражение'],
      datasets: [
        {
          data: [won, lost],
          backgroundColor: [
            'rgba(63, 224, 38, 0.9)',
            'rgba(255, 32, 38, 0.9)',
          ],
          hoverBackgroundColor: [
            'rgba(63, 224, 38, 2.5)',
            'rgba(255, 32, 38, 2.5)',
          ],
          borderWidth: 4,
          weigth: 1,
        }
      ]
    })
  }

  return (

    <div className={styles.doughnut}>
      <div className={styles.gameInfo}>
        <h5>Всего игр : {gameValue}</h5>
        {typeof percent !== String ? <p>Процент побед: {percent} %</p> : <p>Вы пока не сыграли матчей</p>}
      </div>
    
    <div className={styles.doughnutDiagram}>
      <Doughnut
          data={chartData}
          width={300}
          height={300}
        />
    </div>
  </div>

  )  
};

export default Circular;
