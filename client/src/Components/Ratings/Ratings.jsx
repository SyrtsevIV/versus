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
      <h1>Рейтинг</h1>
      <div className="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" className="btn btn-outline-primary" onClick={()=>changeRating('mmr')}>По MMR</button>
        <button type="button" className="btn btn-outline-primary" onClick={()=>changeRating('won')}>По количеству побед</button>
        <button type="button" className="btn btn-outline-primary" onClick={()=>changeRating('gold')}>По количеству золотых кубков</button>
      </div>
      <ul className={`collection ${styles.ul}`}>
        {ratings.tableTennis.map((stats, index) => 
          <>
            <div className={styles.row}>

              <div className={styles.center}>
                <img className={styles.img} src="http://pngimg.com/uploads/star/star_PNG1584.png" alt="Звезда" />
                <p className={styles.rating}>{index+1}</p>
              </div>

              <div className={styles.stats}>
                <li className={`collection-item avatar ${styles.li}`}>
                    <img src={stats.avatar} alt="" className="circle" />
                    <span className="title">{stats.user.login}</span>
                    <p>
                      <br />
                        Рейтинг MMR: <b>{stats.mmr}</b>
                      <br />
                        Выиграл золотых кубков: <b>{stats.gold}</b>
                      <br />
                        Выиграл всего игр: <b>{stats.won}</b>
                    </p>
                </li>
              </div>
            </div>
          </>
        )}
      </ul>
    </div>
    );
};

export default Ratings;
