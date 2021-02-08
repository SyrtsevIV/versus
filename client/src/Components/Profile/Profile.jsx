import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, findUserStats, editUserProfile } from '../../redux/actionCreators/profile';
import styles from '../Profile/profile.module.css'
import { useParams } from 'react-router-dom'
import { Doughnut, Radar } from 'react-chartjs-2'
import Cup from '../Cup/Cup';


const Profile = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.profileStats);
  const enemy = useSelector((state) => state.profileStats.compare)
  
  const [chartData, setChartData] = useState({})
  const [radarData, setRadarData] = useState({})

  // State для хранения текста из инпута для сравнения игроков
  const [inputText, setInputText] = useState('');

  // State для редактирования информации
  const [editProfile, setEditProfile] = useState();
  const [changeLogin, setChangeLogin] = useState();
  const [changeEmail, setChangeEmail] = useState();

  const won = user.stats.won
  const lost = user.stats.lost
  const gameValue = won + lost
  const percent = ((won / (won + lost)) * 100).toFixed(2) 

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
  },[user, enemy])

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
          data: [user.stats.score, user.stats.won, user.stats.missed, user.stats.lost]
        },
        {
          label: 'Противник',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255, 32, 38, 0.9)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [enemy.score , enemy.won, enemy.missed, enemy.lost]
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
  

  // Edit profile information
  const edithandler = (name) => {
    setEditProfile(name)
  }
  const changeLoginHandler = ({target}) => {
    setChangeLogin(target.value);
  }
  const changeEmailHandler = ({target}) => {
    setChangeEmail(target.value);
  }
  const saveChanges = () => {
    dispatch(editUserProfile({ id, changeLogin, changeEmail }))
  }
  
  return (
    <div>
      
      <div className={styles.topBlock}>
        
        <div className={styles.profileBlock}>
          {editProfile ? (
            <>
              <input onChange={changeLoginHandler} />
              <input onChange={changeEmailHandler} />
              <input type="file" placeholder="Загрузить фото"/>
              <button type="submit" onClick={() => saveChanges()}>Сохранить</button>
            </>
          ) : (
            <>
              <h3>{user.user.login}</h3>
              <span>E-mail: {user.user.email}</span>
              <button type="button" onClick={() => edithandler(user.user.login)}>Редактировать профиль</button>
            </>
          )}
        </div>

        <div className={styles.avatar}>
          <img src={user.user.avatar} alt=""></img>
        </div>
          
        <Cup />

      </div>

      <div className={styles.rankBlock}>
        <div>
          <p>MMR: {user.stats.mmr}</p>
          <p>Позиция в общем рейтинге: {user.rating} из {user.allPlayerValue}</p>
        </div>
      </div>

      
      <div className={styles.statsBlock}>
        
        <div>
          <div className={styles.gameInfo}>
            <p>Всего игр : {gameValue}</p>
            <p>Процент побед: {percent} %</p>
          </div>
          <Doughnut 
            data={chartData}
            width={380}
            height={380}
            options={{
              responsive: true,
            }}
          />
        </div>

        <div>
          <div className={styles.gameInfo}>
            <p>Сравнить статистику</p>
            <div className={styles.statsBlock}>
              <input type="text" placeholder="Введите логин" onChange={textInput}/>
              <button type="submit" onClick={() => {compareStats(inputText)}}>Сравнить</button>
            </div>
          </div>
          <Radar 
            data={radarData}
            width={480}
            height={480}
          />
        </div>
      </div>

    </div>
  );
};

export default Profile;
