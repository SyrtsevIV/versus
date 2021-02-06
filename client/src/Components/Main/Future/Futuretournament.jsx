import styles from "../main.module.css";
import "../slider-animation.css";
import Slider from 'react-animated-slider';
import "react-animated-slider/build/horizontal.css";
import { useEffect } from 'react';

export default function Futuretournament() {
  const slides = [
   {id: 77, title: 'Название турнира77', table0: '++++++++++++++++++++++++++', table1: '++++++++++++++++++++++++++', table2:'++++++++++++++++++++++++++', date: '05.02.2021'},
   {id: 7777, title: 'Название турнира7777', table0: '++++++++++++++++++++++++++', table1: '++++++++++++++++++++++++++', table2:'++++++++++++++++++++++++++', date: '05.02.2021'},
   {id: 777777, title: 'Название турнира777777', table0: '++++++++++++++++++++++++++', table1: '++++++++++++++++++++++++++', table2:'++++++++++++++++++++++++++', date: '05.02.2021'},
   {id: 77777777, title: 'Название турнира77777777', table0: '++++++++++++++++++++++++++', table1: '++++++++++++++++++++++++++', table2:'++++++++++++++++++++++++++', date: '05.02.2021'},
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
      <h4>Будущие турниры</h4>
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
