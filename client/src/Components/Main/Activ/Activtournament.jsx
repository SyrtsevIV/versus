import styles from "../main.module.css";
import "../slider-animation.css";
import Slider from 'react-animated-slider';
import "react-animated-slider/build/horizontal.css";
import { useEffect } from 'react';

export default function Activtournament() {
  const slides = [
   {id: 11, title: 'Название турнира11', table0: '##############################', table1: '##############################', table2:'##############################', date: '05.02.2021'},
   {id: 1111, title: 'Название турнира1111', table0: '##############################', table1: '##############################', table2:'##############################', date: '05.02.2021'},
   {id: 111111, title: 'Название турнира111111', table0: '##############################', table1: '##############################', table2:'##############################', date: '05.02.2021'},
   {id: 11111111, title: 'Название турнира11111111', table0: '##############################', table1: '##############################', table2:'##############################', date: '05.02.2021'},
  ];

  const slideHandler = (index) => {
    const slide = slides.find((el, i) => i === index);
    window.history.replaceState({},'', `/${slide.id}`);
  }
  useEffect(() => {
    slideHandler(0);
  }, [])

  return (
    <div className={styles.center}>
      <h4>Активные турниры:</h4>
      <Slider onSlideChange={({slideIndex})=>slideHandler(slideIndex)}>
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
