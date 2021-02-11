import styles from './user.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserHistory } from '../../../redux/actionCreators/profile';
import { useParams } from 'react-router-dom'
import { editAvatar } from '../../../redux/actionCreators/profile';

const User = () => {
  const {userId} = useParams()
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
  
  return (
    <div className={styles.profileBlock}>
      <h4>Login: {user?.user.login}</h4>
    
      <img src={`http://localhost:3001/images/${user?.user?.avatar}`} alt="" />

      <div className={styles.changeAvatar}>
        
        <form action="#" method="POST" encType="multipart/form-data" className={styles.form}>
        
          <input class={`btn btn-primary ${styles.button}`}  type="file" id="file" name="filedata" accept=".jpg" placeholder="HELLOOOOOO" onChange={(event) => {
            const file = event.target.files[0];
            setFile(file)
          }} />
          <button type="button" class="btn btn-primary" onClick={(event) => sendAvatar(event)}>Обновить фотографию</button>
        </form>
      </div>
  </div>
  )  
};

export default User;
