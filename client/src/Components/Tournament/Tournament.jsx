import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createTournament } from "../../redux/actionCreators/tournamentActionCreator";
import style from './style.module.css'

const Tournament = () => {
  const dispatch = useDispatch()
  const error = useSelector(state => state.tournamentItem.error)
  const history = useHistory()
  const [input, setInput] = useState({
    type: '',
    title: '',
    description: '',
    date: '',
    place: '',
  })

  const inputHandler = (event) => {
    setInput(prev => {
      return { ...prev, [event.target.name]: event.target.value }
    })
  }

  const dateNow = new Date().toISOString().replace(/(:\d\d\..+)/g, '')

  return (
    <div className={style.flex}>
      {error ?
        <h1>{error}</h1> :
        <>
          <h1>Создание турнира</h1>
          <div className={style.container}>
            <select onChange={inputHandler} name='type' className="form-select m-3" aria-label="Default select example">
              <option disabled selected='selected'>Выберите тип турнира</option>
              <option>Single elimination</option>
              <option disabled >Double elimination (скоро)</option>
            </select>
            <input onChange={inputHandler} name='title' type="text" className="form-control m-3" placeholder="Название турнира" aria-label="Username" />
            <div className="form-floating">

              <textarea onChange={inputHandler} name='description' className="form-control m-3" placeholder='Описание'></textarea>
            </div>
            <div className="d-flex-column justify-content m-3">
              <label htmlFor="date">Дата проведения:</label>
              <input onChange={inputHandler} name='date' type='datetime-local' min={dateNow}></input>
            </div>
            <input onChange={inputHandler} name='place' type="text" className="form-control m-3" placeholder="Место проведения" aria-label="Username" />
            <button onClick={(e) => {
              e.preventDefault()
              dispatch(createTournament(input, history))
            }} className='btn btn-primary m-3'>Создать</button>
          </div>
        </>
      }
    </div >
  );
}

export default Tournament;
