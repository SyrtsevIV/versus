import { useSelector } from 'react-redux';
import styles from '../Profile/profile.module.css'

const Profile = () => {
  const user = useSelector((state) => state.profile);

  return (
    <div>
      <h1>{user.login}</h1>
      <img src="" alt="Тут будет аватарка юзера"/>
      <p>MMR: Тут будет ММР юзера</p>
      <p>Рейтинг: 12332</p>

      <div className={styles.cupBlock}>
        <div>
          <img src="" alt="№1"/>
          <p>1</p>
        </div>
        <div>
          <img src="" alt="№2"/>
          <p>3</p>
        </div>
        <div>
          <img src="" alt="№3"/>
          <p>12</p>
        </div>
      </div>

      <div className={styles.statsBlock}>

      </div>
    </div>
  );
};

export default Profile;
