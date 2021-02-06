import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUserProfile from '../../redux/actionCreators/profile';
import styles from '../Profile/profile.module.css'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(()=> {
    dispatch(getUserProfile(id))
  },[])
  
  const user = useSelector((state) => state.profileStats);
  console.log(user);
  return (
    <div className={styles.profileBlock}>
      <div className={styles.userRankBlock}>
        <div>
          <h1>LOGIN</h1>
          <img src="" alt="Тут будет аватарка юзера"/>
          <p>MMR: {user.rating}</p>
          <p>Рейтинг: 12332</p>
        </div>
      </div>

      <div className={styles.cupBlock}>
        <div>
          <span className={styles.price}>&#129351;</span>
          <p>{user.gold}</p>
        </div>
        <div>
          <span className={styles.price}>&#129352;</span>
          <p>{user.silver}</p>
        </div>
        <div>
        < span className={styles.price}>&#129353;</span>
          <p>{user.bronze}</p>
        </div>
      </div>

      <div className={styles.statsBlock}>
        
      </div>
    </div>
  );
};

export default Profile;
