import styles from "../main.module.css";
import "../slider-animation.css";
import Slider from 'react-animated-slider';
import "react-animated-slider/build/horizontal.css";
import { useSelector } from 'react-redux';
import Bracket from '../../Brackets/Bracket';

export default function Activtournament() {
  const tours = useSelector(state => state.mainPageTours);

  return (
    <div className={styles.center}>
      {tours.length ?
      <Slider>
          {tours.map(tour =>
            <div className={styles.center} key={tour._id}>
              <h4>Название: {tour.title}</h4>
              {tour.bracket ? 
                <Bracket id={tour._id} />
                :
                <div className={styles.center}>
                    <ol> Список участников:
                      {tour.participants.map(user =>
                        <li key={user._id}>{user.login}</li>
                        )}
                    </ol>
                </div>
              }
              <h5>Где: {tour.place}</h5>
              <h5>Когда: {tour.date}</h5>
          </div>
        )}
        </Slider>
        :
        <h3>Турниров пока нет</h3>
  }
    </div>
    )
}
