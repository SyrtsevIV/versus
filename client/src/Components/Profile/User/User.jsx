import styles from './user.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserHistory } from '../../../redux/actionCreators/profile';
import { useParams } from 'react-router-dom'
import { editAvatar } from '../../../redux/actionCreators/profile';

const User = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.profileStats);
  const [file, setFile] = useState()

  useEffect(() => {
    dispatch(getUserHistory(userId))
  }, [])

  // Добавление пользовательской аватарки
  const sendAvatar = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append("file", file)
    dispatch(editAvatar(file, userId))
  };

  console.log(user.user);

  return (
    <div className={styles.profileBlock}>
      <h4>{user?.user.login}</h4>

      { user.user.googleId && user?.user?.googleId ?
        <img src={`http://localhost:3001/images/${user?.user?.avatar}`} alt={`${user?.user?.avatar}`} /> :
        <img src={`http://localhost:3001/images/${user?.user?.avatar}`} alt="" />
      }

      <div className={styles.changeAvatar}>

        <form action="" method="POST" encType="multipart/form-data" className={styles.form}>
          <input className={`btn btn-primary ${styles.button}`} type="file" id="file" name="filedata" accept=".jpg" placeholder="HELLOOOOOO" onChange={(event) => {
            const file = event.target.files[0];
            setFile(file)
          }} />
          <button type="button" className="btn btn-primary" onClick={(event) => sendAvatar(event)}>Обновить фотографию</button>
        </form>
      </div>
    </div>
  )
};

export default User;
