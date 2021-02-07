import styles from "../main.module.css";
import "../slider-animation.css";
import Slider from 'react-animated-slider';
import "react-animated-slider/build/horizontal.css";
import { useSelector } from 'react-redux';
import slideHandler from '../../../redux/actionCreators/mainPageStatus/getTours/getTours';

export default function Futuretournament() {
  const tours = useSelector(state => state.mainPageTours);

  return (
    <div className={styles.center}>
      <h4>Будущие турниры</h4>
      <Slider onSlideChange={({slideIndex})=>slideHandler(slideIndex, tours)}>
        {tours.map(el =>
          <div className={styles.center} key={el._id}>
            <div>
              <span>{el.status}</span>
              <p>Будущий {el._id}</p>
              <p>{el.participants}</p>
              <p>{el.participants}</p>
              <p>{el.participants}</p>
                <br/>
              <button>Нажми меня полностью</button> <button>И ещё раз нажми</button>
            </div>
          </div>
        )}
      </Slider>
    </div>
  )
}
