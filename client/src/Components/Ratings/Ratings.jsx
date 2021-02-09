import styles from "./Ratings.module.css";
import getRatings from '../../redux/actionCreators/ratings';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Ratings = () => {
  const dispatch = useDispatch();
  const ratings = useSelector(state => state.ratings)
  
  useEffect(() => {
    dispatch(getRatings());
  }, []);

  const changeRating = (type) => { 
    dispatch(getRatings(type))
  }

  return (
    <div className={styles.center}>
      <h1>Rating page</h1>
      <div className="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" className="btn btn-outline-primary" onClick={()=>changeRating('mmr')}>По MMR</button>
        <button type="button" className="btn btn-outline-primary" onClick={()=>changeRating('won')}>По количеству побед</button>
        <button type="button" className="btn btn-outline-primary" onClick={()=>changeRating('gold')}>По количеству золотых кубков</button>
      </div>
      <ul className={`collection ${styles.ul}`}>
        {ratings.tableTennis.map((stats, index) => 
          <>
            <li className="collection-item avatar">
              <img src="https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg" alt="" className="circle" />
              <span className="title">{stats.user.login}</span>
              <p>
                <br />
                  Рейтинг MMR: <b>{stats.mmr}</b>
                <br />
                Выиграл золотых кубков: <b>{stats.gold}</b>
                <br />
                Выиграл всего игр: <b>{stats.gold}</b>
              </p>
              <a href="#!" class="secondary-content"><i class="material-icons">Место в рейтинге: <b>{index+1}</b></i></a>
            </li>
          </>
        )}
      </ul>
    </div>
    );
};

export default Ratings;
