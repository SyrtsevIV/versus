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
      <div className={styles.container}>
      <h1>Рейтинг</h1>
      <div className={styles.center}>
        <div className="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" className="btn btn-outline-primary" onClick={()=>changeRating('mmr')}>По MMR</button>
          <button type="button" className="btn btn-outline-primary" onClick={()=>changeRating('won')}>По количеству побед</button>
          <button type="button" className="btn btn-outline-primary" onClick={()=>changeRating('gold')}>По количеству золотых кубков</button>
        </div>
      </div>
        {/* <ul className={`collection ${styles.ul}`}>  */}
        <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Логин игрока</th>
            <th scope="col">MMR</th>
            <th scope="col">Выиграл золотых кубков</th>
            <th scope="col">Число побед</th>
          </tr>
        </thead>

        {ratings.tableTennis.map((stats, index) => 
          <>
            {/* <div className={styles.row}>

<div className={styles.center}>
<img className={styles.img} src="http://pngimg.com/uploads/star/star_PNG1584.png" alt="Звезда" />
<p className={styles.rating}>{index+1}</p>
</div>

<div className={styles.stats}> */}
                 <tbody>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{stats?.user?.login}</td>
                      <td>{Math.round(stats.mmr)}</td>
                      <td>{stats.gold}</td>
                      <td>{stats.won}</td>
                    </tr>
                  </tbody>
              {/* </div>
            </div> */}
          </>
        )}
      </table>
      {/* </ul> */}
            </div>
      </div>
    );
          }

export default Ratings;
