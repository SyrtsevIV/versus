import styles from "./activtournament.module.css";
import "./slider-animation.css";
import Slider from 'react-animated-slider';
import "react-animated-slider/build/horizontal.css";

export default function Activtournament() {

  const slides = [
   {title: 'Название турнира1', table0: '##############################', table1: '##############################', table2:'##############################', date: '05.02.2021'},
   {title: 'Название турнира2', table0: '##############################', table1: '##############################', table2:'##############################', date: '05.02.2021'},
   {title: 'Название турнира3', table0: '##############################', table1: '##############################', table2:'##############################', date: '05.02.2021'},
   {title: 'Название турнира4', table0: '##############################', table1: '##############################', table2:'##############################', date: '05.02.2021'},
   {title: 'Название турнира5', table0: '##############################', table1: '##############################', table2:'##############################', date: '05.02.2021'},
   {title: 'Название турнира5', table0: '##############################', table1: '##############################', table2:'##############################', date: '05.02.2021'},
   {title: 'Название турнира5', table0: '##############################', table1: '##############################', table2:'##############################', date: '05.02.2021'},
  ];
  return (
    <div className={styles.center}>
      <h4>Активные турниры:</h4>
      <Slider>
        {slides.map(el =>
          <div className={styles.center} key={Math.random()}>
            <div>
              <span>{el.title}</span>
              <p>{el.table0}</p>
              <p>{el.table1}</p>
              <p>{el.table2}</p>
              {el.date}
                <br/>
              <button>Нажми меня полностью</button> <button>И ещё раз нажми</button>
            </div>
          </div>
        )}
      </Slider>
    </div>
  )
}

