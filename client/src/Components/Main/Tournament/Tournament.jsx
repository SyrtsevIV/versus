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
              <Bracket />
            {/* <div>
              <span>{tour.status}</span>
              <p>Активный {tour._id}</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <br/>
              <button>Нажми меня полностью</button> <button>И ещё раз нажми</button>
            </div> */}
          </div>
        )}
        </Slider>
        :
        <h3>Турниров пока нет</h3>
  }
    </div>
    )
}
