import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, findUserStats, editAvatar } from '../../redux/actionCreators/profile';
import styles from '../Profile/profile.module.css'
import { useParams } from 'react-router-dom'
import { Doughnut, Radar } from 'react-chartjs-2'
import Cup from '../Cup/Cup';
import History from '../History/History';

const Profile = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.profileStats);
  const enemy = useSelector((state) => state.profileStats.compare)
  
  const [chartData, setChartData] = useState({})
  const [radarData, setRadarData] = useState({})

  // State для хранения текста из инпута для сравнения игроков
  const [inputText, setInputText] = useState('');
  // State для хранения пользовательской аватарки
  const [file, setFile] = useState()

  const won = user?.stats?.won
  const lost = user?.stats?.lost
  const gameValue = won + lost || 0
  const percent = ((won / (won + lost)) * 100).toFixed(2) || 0

  // Круговая диаграмма по статистике побед - поражений 
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

  useEffect(() => {
    dispatch(getUserProfile(id))
  }, [])

  useEffect(()=> {
    chart()
    radar()
  }, [user, enemy])

  // Радарная диаграма сравнения с соперниками
  const radar = () => {
    setRadarData({
      labels: ['Забито х 10', 'Победа', 'Пропущено х 10', 'Поражение'],
      datasets: [
        {
          label: 'Моя статистика',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(63, 224, 38, 0.9)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: 'rgba(179,181,198,0.2)',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [user?.stats?.score, user?.stats?.won, user?.stats?.missed, user?.stats?.lost]
        },
        {
          label: 'Противник',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255, 32, 38, 0.9)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [enemy?.score , enemy?.won, enemy?.missed, enemy?.lost]
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
  
  // Добавление пользовательской аватарки
  const sendAvatar = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append("file", file)
    console.log(file);
    dispatch(editAvatar(file, id))
  };
  

  return (
    <div>
      
      <div className={styles.topBlock}>
        
        <div className={styles.profileBlock}>
          <h4>Login: {user?.user.login}</h4>
        
          <img src={`http://localhost:3001/images/${user?.user?.avatar}`} alt="" />

          <div className={styles.changeAvatar}>
            
            <form action="#" method="POST" encType="multipart/form-data" className={styles.form}>
              <input type="file" id="file" name="filedata" accept=".jpg" onChange={(event) => {
                const file = event.target.files[0];
                setFile(file)
              }}/>
              <button onClick={(event) => sendAvatar(event)}>Обновить фотографию</button>
            </form>
          </div>
        </div>

        <div className={styles.rankBlock}>
          <div>
            <p>MMR: {user?.stats?.mmr}</p>
            <p>Позиция в общем рейтинге: {user?.rating} из {user?.allPlayerValue}</p>
          </div>
        </div>  
          
        <Cup />

      </div>

      
      <div className={styles.statsBlock}>
        
        <div className={styles.history}>
          <p>История игр:</p>
          <History />
        </div>

        <div className={styles.doughnut}>
          <div className={styles.gameInfo}>
            <p>Всего игр : {gameValue}</p>
            {percent === Number ? <p>Процент побед: {percent} %</p> : <p>Вы пока не сыграли матчей</p>}
          </div>
         
         <div className={styles.doughnutDiagram}>
          <Doughnut
              data={chartData}
              width={300}
              height={300}
            />
         </div>
          
        </div>

        <div className={styles.radar}>
          <div className={styles.gameInfo}>
            <p>Сравнить статистику</p>
            <div className={styles.statsBlock}>
              <input type="text" placeholder="Введите логин" onChange={textInput}/>
              <button type="submit" onClick={() => {compareStats(inputText)}}>Сравнить</button>
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
      </div>

    </div>
  );
};

export default Profile;
