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

  return (
    <div className={styles.center}>
      <h1>Rating page</h1>
      <ul>
      {ratings.tableTennis.map(stats => 
        <li>
          {stats.mmr}***{stats.user.login}
        </li>
        )}
        </ul>
    </div>
    );
};

export default Ratings;
